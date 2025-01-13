import { useState } from "react";
import { Container, Typography, Button, Grid2, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

interface Advertisement {
  id: string;
  name: string;
  content: string;
  startDate: string;
  endDate: string;
}

const AdPanel: React.FC = () => {
  const [ads, setAds] = useState<Advertisement[]>(() => JSON.parse(localStorage.getItem("ads") || "[]"));

  const removeAd = (id: string) => {
    const updatedAds = ads.filter(ad => ad.id !== id);
    setAds(updatedAds);
    localStorage.setItem("ads", JSON.stringify(updatedAds));
  };

  return (
    <Container>
      <Typography variant="h4">Ad Management</Typography>
      <Link to="/advertisements/new">
        <Button variant="contained" style={{ marginBottom: "20px" }}>Create New Ad</Button>
      </Link>
      <Grid2 container spacing={2}>
        {ads.map((ad) => (
          <Grid2 key={ad.id} component="div" sx={{ width: { xs: "100%", sm: "50%", md: "33.33%" } }}>
            <Card>
              <CardContent>
                <Typography variant="h6">{ad.name}</Typography>
                <Typography variant="body2">{ad.content}</Typography>
                <Typography variant="caption">Start: {ad.startDate} - End: {ad.endDate}</Typography>
                <Button onClick={() => removeAd(ad.id)} color="secondary">Remove</Button>
                <Link to={`/advertisements/edit/${ad.id}`}>
                <Button color="primary">Edit</Button>
                </Link>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default AdPanel;

