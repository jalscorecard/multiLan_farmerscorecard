import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import translations from "../i18n";

function Page3({ onNext, onBack, form }) {
  const [data, setData] = useState({
    farmName: form.farmName || "",
    mapLink: form.mapLink || "",
    area: form.area || "",
    plotsCount: form.plotsCount || "",
  });
  const [error, setError] = useState({});

  const currentLang = form.language || "en";
  const t = translations[currentLang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({
      ...prev,
      [name]: value ? "" : t.messages.required,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};

    if (!data.farmName) err.farmName = t.messages.required;
    if (!data.mapLink) err.mapLink = t.messages.required;
    if (!data.area) err.area = t.messages.required;
    if (!data.plotsCount) err.plotsCount = t.messages.required;

    setError(err);
    if (Object.keys(err).length === 0) onNext(data);
  };

  return (
    <div>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom color="primary">
          {t.apartment.title}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label={t.apartment.name}
            name="farmName"
            value={data.farmName}
            onChange={handleChange}
            error={!!error.farmName}
            helperText={error.farmName}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label={t.apartment.map}
            name="mapLink"
            value={data.mapLink}
            onChange={handleChange}
            error={!!error.mapLink}
            helperText={error.mapLink}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label={t.apartment.units}
            name="plotsCount"
            value={data.plotsCount}
            onChange={handleChange}
            error={!!error.plotsCount}
            helperText={error.plotsCount}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label={t.apartment.area || "అంచనా వేయబడుతున్న ఫార్మ్ గురించి"}
            name="area"
            value={data.area}
            onChange={handleChange}
            error={!!error.area}
            helperText={error.area}
            fullWidth
            margin="normal"
            required
          />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={onBack}>
              {t.buttons.back}
            </Button>
            <Button variant="contained" type="submit">
              {t.buttons.next}
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
}

export default Page3;
