import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import pg from "pg";
import multer from "multer";
import nodemailer from "nodemailer";

const app = express();
const upload = multer();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: [process.env.FRONTEND_URL || "http://localhost:5174"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

app.post("/api/submit", upload.none(), async (req, res) => {
  const form = req.body;

  if (!form.fullName || !form.email) {
    return res.status(400).json({
      success: false,
      message: "Full name and email are required.",
    });
  }

  form.date = form.date || new Date().toISOString();

  const query = `
    INSERT INTO farmer_submissions (
      fullName, email, whatsapp, date, farmName, mapLink, plotsCount,
      q1_1, q1_2, q1_3,
      q2_1, q2_2,
      q3_1, q3_2,
      q4_1, q4_2,
      q5_1, q5_2
    ) VALUES (
      $1,$2,$3,$4,$5,$6,$7,
      $8,$9,$10,
      $11,$12,
      $13,$14,
      $15,$16,
      $17,$18
    ) RETURNING id;
  `;

  const toNumber = (val) =>
    val === null || val === undefined || val === "" ? null : Number(val);

  const values = [
    form.fullName,
    form.email,
    form.whatsapp || null,
    form.date,
    form.farmName || null,
    form.mapLink || null,
    toNumber(form.plotsCount),
    toNumber(form.q1_1),
    toNumber(form.q1_2),
    toNumber(form.q1_3),
    toNumber(form.q2_1),
    toNumber(form.q2_2),
    toNumber(form.q3_1),
    toNumber(form.q3_2),
    toNumber(form.q4_1),
    toNumber(form.q4_2),
    toNumber(form.q5_1),
    toNumber(form.q5_2),
  ];

  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const result = await client.query(query, values);
    await client.query("COMMIT");

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully!",
      submissionId: result.rows[0].id,
    });
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Database error:", err);
    return res.status(500).json({
      success: false,
      message: "Submission failed",
      error: err.message,
    });
  } finally {
    client.release();
  }
});

// ✅ Email PDF with CC
app.post("/api/send-pdf-email", upload.single("pdf"), async (req, res) => {
  const { email, cc_email } = req.body;
  const pdf = req.file;

  if (!email || !pdf) {
    return res.status(400).json({
      success: false,
      message: "Email and PDF file are required.",
    });
  }

  const mailOptions = {
    from: `"Farm Assessment" <${process.env.EMAIL_USER}>`,
    to: email,
    cc: cc_email || process.env.EMAIL_USER,
    subject: "Your Farm Assessment Report",
    text: `Hi Farmer,

Congratulations on taking the first step in becoming a Profitable & Productive Farmer whose practices lead to a rich soil and abundant water.

Please find your report attached which tells you where your practices are right and where there is scope for change.

Contact your local Sanchaalak to learn how to make those changes to become a Profitable & Productive Farmer.

Regards,
Team Jal Smruti`,
    attachments: [
      {
        filename: pdf.originalname || "Farm_Assessment_Report.pdf",
        content: pdf.buffer,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Report emailed successfully!",
    });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: err.message,
    });
  }
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`CORS configured for origins: ${corsOptions.origin.join(", ")}`);
});
