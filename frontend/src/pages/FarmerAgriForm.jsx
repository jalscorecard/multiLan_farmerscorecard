import React, { useState } from "react";

const initialFormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  date: "",
  farmName: "",
  maplink: "",
  plotsCount: "",
  q1_1: "",
  q1_2: "",
  q1_3: "",
  q2_1: "",
  q2_2: "",
  q3_1: "",
  q3_2: "",
  q4_1: "",
  q4_2: "",
  q5_1: "",
  q5_2: "",
};

export default function FarmerAssessmentForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.fullName || !formData.email) {
      setErrorMsg("Please fill in your full name and email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://multilan-farmerscorecard.onrender.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(data.message || "Form submitted successfully!");
        setFormData(initialFormState);
      } else {
        setErrorMsg(data.message || "Failed to submit the form.");
      }
    } catch (err) {
      setErrorMsg("Error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "auto" }}>
      <h2>Farmer Scorecard Form</h2>
      {successMsg && <p style={{ color: "green" }}>{successMsg}</p>}
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        {/* Basic info */}
        <label>
          Full Name*:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email*:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          WhatsApp:
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Farm Name:
          <input
            type="text"
            name="farmName"
            value={formData.farmName}
            onChange={handleChange}
          />
        </label>
        <label>
          Map Link:
          <input
            type="url"
            name="maplink"
            value={formData.maplink}
            onChange={handleChange}
          />
        </label>
        <label>
          Plots Count:
          <input
            type="number"
            name="plotsCount"
            value={formData.plotsCount}
            onChange={handleChange}
            min="0"
          />
        </label>

        {/* Section 1 */}
        <fieldset>
          <legend>1) Soil Health Assessment</legend>
          <label>
            1.1 Crop cover and living roots:
            <select name="q1_1" value={formData.q1_1} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">Occasional cover</option>
              <option value="2">Seasonal cover</option>
              <option value="3">Year-round cover</option>
            </select>
          </label>

          <label>
            1.2 Tillage practices:
            <select name="q1_2" value={formData.q1_2} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">Intensive tillage</option>
              <option value="1">Conventional tillage</option>
              <option value="2">Reduced tillage</option>
              <option value="3">No-till</option>
            </select>
          </label>

          <label>
            1.3 Soil amendments:
            <select name="q1_3" value={formData.q1_3} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">Chemical fertilizers only</option>
              <option value="2">Mixed organic & chemical</option>
              <option value="3">Organic compost/manure</option>
            </select>
          </label>
        </fieldset>

        {/* Section 2 */}
        <fieldset>
          <legend>2) Biodiversity & Crop Management</legend>
          <label>
            2.1 Crop rotation:
            <select name="q2_1" value={formData.q2_1} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">2-year rotation</option>
              <option value="2">3-year rotation</option>
              <option value="3">Diverse multi-year rotation</option>
            </select>
          </label>

          <label>
            2.2 Indigenous seeds:
            <select name="q2_2" value={formData.q2_2} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">Occasional</option>
              <option value="2">Regular</option>
              <option value="3">Predominant use</option>
            </select>
          </label>
        </fieldset>

        {/* Section 3 */}
        <fieldset>
          <legend>3) Pest, Disease and Input Management</legend>
          <label>
            3.1 Chemical pesticides:
            <select name="q3_1" value={formData.q3_1} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">High use</option>
              <option value="1">Moderate use</option>
              <option value="2">Low use</option>
              <option value="3">No chemical use</option>
            </select>
          </label>

          <label>
            3.2 Input reliance:
            <select name="q3_2" value={formData.q3_2} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">Fully dependent on market inputs</option>
              <option value="1">Mostly dependent</option>
              <option value="2">Partially self-reliant</option>
              <option value="3">Fully self-reliant inputs</option>
            </select>
          </label>
        </fieldset>

        {/* Section 4 */}
        <fieldset>
          <legend>4) Water & Soil Moisture Management</legend>
          <label>
            4.1 Rainwater harvesting:
            <select name="q4_1" value={formData.q4_1} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">Plans in place</option>
              <option value="2">Partially implemented</option>
              <option value="3">Fully operational</option>
            </select>
          </label>

          <label>
            4.2 Soil moisture:
            <select name="q4_2" value={formData.q4_2} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">No monitoring</option>
              <option value="1">Basic checks</option>
              <option value="2">Periodic monitoring</option>
              <option value="3">Smart sensors</option>
            </select>
          </label>
        </fieldset>

        {/* Section 5 */}
        <fieldset>
          <legend>5) Integration of Livestock</legend>
          <label>
            5.1 Livestock integration:
            <select name="q5_1" value={formData.q5_1} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">None</option>
              <option value="1">Minimal</option>
              <option value="2">Moderate</option>
              <option value="3">High integration</option>
            </select>
          </label>

          <label>
            5.2 Grazing practices:
            <select name="q5_2" value={formData.q5_2} onChange={handleChange}>
              <option value="">Select</option>
              <option value="0">Uncontrolled grazing</option>
              <option value="1">Occasional control</option>
              <option value="2">Rotational grazing</option>
              <option value="3">Well-managed sustainable grazing</option>
            </select>
          </label>
        </fieldset>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
