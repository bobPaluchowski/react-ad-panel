import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@mui/material";

interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
}

const CreateEditAd: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const ads = JSON.parse(localStorage.getItem("ads") || "[]");

  const existingAd = id ? ads.find((ad: Advertisement) => ad.id === id) : null;

  const [name, setName] = useState(existingAd ? existingAd.name : "");
  const [content, setContent] = useState(existingAd ? existingAd.content : "");
  const [startDate, setStartDate] = useState(existingAd ? existingAd.startDate : "");
  const [endDate, setEndDate] = useState(existingAd ? existingAd.endDate : "");

  const addOrUpdateAd = () => {
    if (!name || !content || !startDate || !endDate) return;
    if (new Date(startDate) < new Date()) {
      alert("Start date cannot be in the past");
      return;
    }

    if (!id && ads.some((ad: Advertisement) => ad.name === name)) {
      alert("An advertisement with this name already exists!");
      return;
    }

    const newAd: Advertisement = {
      id: id || Math.random().toString(36).substr(2, 9),
      name,
      content,
      startDate,
      endDate,
    };

    const updatedAds = id
      ? ads.map((ad: Advertisement) => (ad.id === id ? newAd : ad))
      : [...ads, newAd];

    localStorage.setItem("ads", JSON.stringify(updatedAds));
    navigate("/ads");
  };

  return (
    <Container>
      <Typography variant="h4">{id ? "Edit Advertisement" : "Create New Advertisement"}</Typography>
      <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Content" fullWidth multiline rows={4} value={content} onChange={(e) => setContent(e.target.value)} />
      <TextField label="Start Date" type="date" fullWidth value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <TextField label="End Date" type="date" fullWidth value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <Button onClick={addOrUpdateAd} variant="contained" style={{ marginTop: "20px" }}>{id ? "Update Ad" : "Add Ad"}</Button>
    </Container>
  );
};

export default CreateEditAd;
