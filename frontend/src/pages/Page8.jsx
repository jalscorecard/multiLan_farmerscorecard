import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import translations from "../i18n";

function Page8({ onNext, onBack, form }) {
  const currentLang = form.language || "en";
  const t = translations[currentLang];
  const section = t.sections[4];

  const initialData = section.questions.reduce((acc, _, i) => {
    const key = `q5_${i + 1}`;
    acc[key] = form[key] ?? "";
    return acc;
  }, {});

  const [data, setData] = useState(initialData);
  const [error, setError] = useState({});

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = {};

    section.questions.forEach((_, i) => {
      const key = `q5_${i + 1}`;
      if (data[key] === "") err[key] = t.messages.required;
    });

    setError(err);
    if (Object.keys(err).length === 0) onNext(data);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: "left" }}>
      <Typography variant="h5" gutterBottom color="primary">
        {section.title}
      </Typography>
      <form onSubmit={handleSubmit}>
        {section.questions.map((q, i) => {
          const key = `q5_${i + 1}`;
          return (
            <FormControl
              key={key}
              component="fieldset"
              sx={{ mt: 3, mb: 2, width: "100%", textAlign: "left" }}
              error={!!error[key]}
            >
              <FormLabel component="legend" sx={{ fontWeight: 600, mb: 1 }}>
                {q.label}
              </FormLabel>
              <RadioGroup
                name={key}
                value={data[key]}
                onChange={handleChange}
                sx={{ textAlign: "left" }}
              >
                {q.options.map((opt) => (
                  <FormControlLabel
                    key={opt.value}
                    value={String(opt.value)}
                    control={<Radio color="primary" />}
                    label={`${opt.value} - ${opt.label}`}
                    sx={{ display: "block", ml: 0, my: 0.5 }}
                  />
                ))}
              </RadioGroup>
              {error[key] && (
                <Typography color="error" variant="caption">
                  {error[key]}
                </Typography>
              )}
            </FormControl>
          );
        })}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            "& .MuiButton-root": { minWidth: "120px" },
          }}
        >
          <Button variant="outlined" onClick={onBack}>
            {t.buttons.back}
          </Button>
          <Button variant="contained" type="submit" color="primary">
              {t.buttons.finish ?? t.buttons.finish_en ?? "Finish"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default Page8;