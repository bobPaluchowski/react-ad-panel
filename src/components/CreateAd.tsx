import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button } from "@mui/material";

interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
}

const CreateAd: React.FC = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const addAd = () => {
    if (!name || !content || !startDate || !endDate) return;
    if (new Date(startDate) < new Date()) {
      alert("Start date cannot be in the past");
      return;
    }
    
    const newAd: Advertisement = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      content,
      startDate,
      endDate,
    };

    const ads = JSON.parse(localStorage.getItem("ads") || "[]");
    ads.push(newAd);
    localStorage.setItem("ads", JSON.stringify(ads));
    navigate("/ads");
  };

  return (
    <Container>
      <Typography variant="h4">Create New Advertisement</Typography>
      <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Content" fullWidth multiline rows={4} value={content} onChange={(e) => setContent(e.target.value)} />
      <TextField label="Start Date" type="date" fullWidth value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <TextField label="End Date" type="date" fullWidth value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <Button onClick={addAd} variant="contained" style={{ marginTop: "20px" }}>Add Ad</Button>
    </Container>
  );
};

export default CreateAd;

