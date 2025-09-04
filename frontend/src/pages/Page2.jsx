import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import translations from "../i18n"; 

const formatAadhar = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  return digits.replace(/(\d{4})(\d{4})(\d{0,4})/, (_, p1, p2, p3) =>
    [p1, p2, p3].filter(Boolean).join(" ")
  );
};

function Page2({ onNext, onBack ,form }) {
  const currentLang = form.language || "en";
  const langPack = translations[currentLang] || {};

  const [data, setData] = useState({
    fullName: form.fullName || "",
    email: form.email || "",
    whatsapp: form.whatsapp || "",
    date: form.date || "",
    gender: form.gender || "",
    dob: form.dob || "",
    aadhar: formatAadhar(form.aadhar || ""),
  });

  const [error, setError] = useState({});

  const validateField = (name, value) => {
    const requiredMsg = langPack.messages?.required || "Required";

    switch (name) {
      case "fullName":
        if (!value) return requiredMsg;
        return /^[A-Za-z\s]+$/.test(value)
          ? ""
          : (langPack.contact?.fullName || "Name") + " must contain only letters and spaces";
      case "email":
        if (!value) return requiredMsg;
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)
          ? ""
          : langPack.messages?.invalidEmail || "Invalid email address";
      case "whatsapp":
        if (!value) return requiredMsg;
        return /^\d{10}$/.test(value)
          ? ""
          : (langPack.contact?.whatsapp || "Phone") + " must be exactly 10 digits";
      case "aadhar":
        if (!value) return requiredMsg;
        return /^\d{4} \d{4} \d{4}$/.test(value)
          ? ""
          : (langPack.contact?.aadhar || "Aadhar") + " must be in xxxx xxxx xxxx format";
      case "gender":
        return value ? "" : (langPack.contact?.gender || "Gender") + " " + requiredMsg;
      case "dob":
        return value ? "" : (langPack.contact?.dob || "Date of Birth") + " " + requiredMsg;
      case "date":
        return value ? "" : (langPack.contact?.date || "Assessment Date") + " " + requiredMsg;
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value;

    if (name === "aadhar") {
      cleanedValue = formatAadhar(value);
    } else if (name === "whatsapp") {
      cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setData((prev) => ({ ...prev, [name]: cleanedValue }));
    setError((prev) => ({
      ...prev,
      [name]: validateField(name, cleanedValue),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(data).forEach((key) => {
      const errorMsg = validateField(key, data[key]);
      if (errorMsg) newErrors[key] = errorMsg;
    });

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onNext({
        ...data,
        aadhar: data.aadhar.replace(/\s/g, ""),
      });
    }
  };

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          {langPack.contact?.title || "Farmer Registration"}
        </Typography>

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label={langPack.contact?.fullName || "Full Name"}
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            error={!!error.fullName}
            helperText={error.fullName}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label={langPack.contact?.email || "Email Address"}
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
            fullWidth
            margin="normal"
            required
          />

          <TextField
            label={langPack.contact?.whatsapp || "Whatsapp Number"}
            name="whatsapp"
            type="tel"
            value={data.whatsapp}
            onChange={handleChange}
            error={!!error.whatsapp}
            helperText={error.whatsapp}
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: 10,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            required
          />

          <TextField
            label={langPack.contact?.date || "Date of Assessment"}
            name="date"
            type="date"
            value={data.date}
            onChange={handleChange}
            error={!!error.date}
            helperText={error.date}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            select
            label={langPack.contact?.gender || "Gender"}
            name="gender"
            value={data.gender}
            onChange={handleChange}
            error={!!error.gender}
            helperText={error.gender}
            fullWidth
            margin="normal"
            required
          >
            <MenuItem value="male">{langPack.gender?.male || "Male"}</MenuItem>
            <MenuItem value="female">{langPack.gender?.female || "Female"}</MenuItem>
          </TextField>

          <TextField
            label={langPack.contact?.dob || "Date of Birth"}
            name="dob"
            type="date"
            value={data.dob}
            onChange={handleChange}
            error={!!error.dob}
            helperText={error.dob}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            label={langPack.contact?.aadhar || "Aadhar Card Number"}
            name="aadhar"
            value={data.aadhar}
            onChange={handleChange}
            error={!!error.aadhar}
            helperText={error.aadhar}
            fullWidth
            margin="normal"
            inputProps={{
              maxLength: 14,
              inputMode: "numeric",
            }}
            required
          />

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={onBack}>
              {langPack.buttons?.back || "Back"}
            </Button>
            <Button variant="contained" type="submit">
              {langPack.buttons?.next || "Next"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Page2;
