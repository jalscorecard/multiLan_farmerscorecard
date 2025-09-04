// src/pages/Preview.jsx
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import translations from "../i18n";
import sections from "./sections";

function toEnglishNumerals(str) {
  if (typeof str !== "string") return str;
  const numeralMap = {
    "०": "0","१": "1","२": "2","३": "3","४": "4","५": "5","६": "6","७": "7","८": "8","९": "9",
    "୦": "0","୧": "1","୨": "2","୩": "3","୪": "4","୫": "5","୬": "6","୭": "7","୮": "8","୯": "9",
    "౦": "0","౧": "1","౨": "2","౩": "3","౪": "4","౫": "5","౬": "6","౭": "7","౮": "8","౯": "9",
    "೦": "0","೧": "1","೨": "2","೩": "3","೪": "4","೫": "5","೬": "6","೭": "7","೮": "8","೯": "9",
  };
  return str.replace(/[०-९୦-୯౦-౯೦-೯]/g, (m) => numeralMap[m]);
}

function labelFromObjLabel(lbl, currentLang) {
  if (lbl && typeof lbl === "object") {
    return lbl[currentLang] ?? lbl.en ?? Object.values(lbl)[0];
  }
  return lbl != null ? String(lbl) : "";
}

function resolveOptionLabel(q, value, currentLang, t) {
  if (value === null || value === undefined || value === "") return "-";

  // N/A handling
  if (q.notApplicableValue !== undefined && String(value) === String(q.notApplicableValue)) {
    return toEnglishNumerals(t.messages?.notApplicable || "N/A");
  }

  // If no options: show raw value (handles free-text questions)
  if (!q.options) {
    // Booleans -> Yes/No if possible
    if (typeof value === "boolean" || String(value).toLowerCase() === "true" || String(value).toLowerCase() === "false") {
      const bool = value === true || String(value).toLowerCase() === "true";
      const yes = t.options?.yes || t.buttons?.yes || "Yes";
      const no = t.options?.no || t.buttons?.no || "No";
      return toEnglishNumerals(bool ? yes : no);
    }
    return toEnglishNumerals(String(value));
  }

  // Array options
  if (Array.isArray(q.options)) {
    if (q.options.length === 0) return toEnglishNumerals(String(value));

    // Array of strings
    if (typeof q.options[0] === "string") {
      // Value might be an index...
      const idx = Number(value);
      if (!isNaN(idx) && idx >= 0 && idx < q.options.length) {
        return toEnglishNumerals(q.options[idx]);
      }
      // ...or the label itself
      const found = q.options.find((opt) => String(opt) === String(value));
      return toEnglishNumerals(found || String(value));
    }

    // Array of { value, label }
    const found =
      q.options.find((o) => String(o.value) === String(value) || o.value === Number(value)) ??
      // Sometimes value is index into the array
      (Number.isFinite(Number(value)) ? q.options[Number(value)] : null);

    if (found) {
      const lbl = labelFromObjLabel(found.label, currentLang) || String(found.value ?? value);
      return toEnglishNumerals(lbl);
    }

    return toEnglishNumerals(String(value));
  }

  // Object options keyed by language { en: [...], hi: [...], ... }
  if (q.options && typeof q.options === "object") {
    const optsForLang = q.options[currentLang] ?? q.options.en ?? Object.values(q.options)[0];

    if (Array.isArray(optsForLang)) {
      // Strings
      if (typeof optsForLang[0] === "string") {
        const idx = Number(value);
        if (!isNaN(idx) && idx >= 0 && idx < optsForLang.length) {
          return toEnglishNumerals(optsForLang[idx]);
        }
        const found = optsForLang.find((opt) => String(opt) === String(value));
        return toEnglishNumerals(found || String(value));
      }
      // { value, label }
      const found =
        optsForLang.find((o) => String(o.value) === String(value) || o.value === Number(value)) ??
        (Number.isFinite(Number(value)) ? optsForLang[Number(value)] : null);

      if (found) {
        const lbl = labelFromObjLabel(found.label, currentLang) || String(found.value ?? value);
        return toEnglishNumerals(lbl);
      }
    }
  }

  // Fallback to raw value
  return toEnglishNumerals(String(value));
}

function Preview({ form, onEdit, onSubmit }) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const currentLang = form.language || "en";
  const t = translations[currentLang] || translations.en;

  const getAnswerLabel = (q, value) => {
    const label = resolveOptionLabel(q, value, currentLang, t);
    if (!label || label === "-") return "-";
    const numVal = Number(value);
    if (!isNaN(numVal) && label !== String(value)) {
      return `${numVal} - ${label}`;
    }
    return label;
  };

  const userDetails = [
    { label: t.contact?.fullName || "Full Name", value: form.fullName },
    { label: t.contact?.email || "Email", value: form.email },
    { label: t.contact?.whatsapp || "Whatsapp", value: form.whatsapp },
    { label: t.contact?.gender || "Gender", value: form.gender },
    { label: t.contact?.dob || "DOB", value: form.dob },
    { label: t.contact?.aadhar || "Aadhar", value: form.aadhar },
    { label: t.contact?.date || "Date", value: form.date },
    { label: t.apartment?.name || "Farm Name", value: form.farmName },
    { label: t.apartment?.map || "Map Link", value: form.mapLink },
    { label: t.apartment?.area || "Area", value: form.area },
    { label: t.apartment?.units || "Plots/Crops", value: form.plotsCount },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 5, width: "100%", maxWidth: "1200px", borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          {toEnglishNumerals(t.messages?.previewTitle || "Preview Your Submission")}
        </Typography>

        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            {toEnglishNumerals(t.contact?.title || "Farmer Details")} &nbsp; {toEnglishNumerals(t.apartment?.title || "Farm Details")}
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table size="small">
              <TableBody>
                {userDetails.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ fontWeight: 600, width: "30%" }}>
                      {toEnglishNumerals(item.label)}
                    </TableCell>
                    <TableCell>
                      {item.value !== undefined && item.value !== null && String(item.value).trim() !== ""
                        ? toEnglishNumerals(String(item.value))
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {sections.map((section, sIdx) => (
          <Box key={sIdx} sx={{ mb: 5 }}>
            <Typography variant="h6" sx={{ color: "#1976d2", mb: 2, fontWeight: 500 }}>
              {toEnglishNumerals(section.title?.[currentLang] || section.title || `Section ${sIdx + 1}`)}
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {toEnglishNumerals(t.buttons?.question || "Question")}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>
                      {toEnglishNumerals(t.buttons?.selectedAnswer || "Selected Answer")}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.questions.map((q, qIdx) => (
                    <TableRow key={q.key || qIdx}>
                      <TableCell>
                        {toEnglishNumerals(
                          (q.label && (q.label[currentLang] || q.label)) || q.label || q.key
                        )}
                      </TableCell>
                      <TableCell>{getAnswerLabel(q, form[q.key])}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}

        <Box sx={{ mt: 10, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" color="primary" onClick={onEdit}>
            {toEnglishNumerals(t.buttons?.edit || "Edit")}
          </Button>
          <Button variant="contained" color="success" onClick={() => setConfirmOpen(true)}>
            {toEnglishNumerals(t.buttons?.submit || "Submit")}
          </Button>
        </Box>

        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>{toEnglishNumerals(t.buttons?.confirm || "Confirm Submission")}</DialogTitle>
          <DialogContent sx={{ mt: 1, mb: 1 }}>
            {toEnglishNumerals(t.messages?.confirmSubmit || "Are you sure you want to submit?")}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>
              {toEnglishNumerals(t.buttons?.cancel || "Cancel")}
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                setConfirmOpen(false);
                onSubmit();
              }}
            >
              {toEnglishNumerals(t.buttons?.confirm || "Confirm")}
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default Preview;
