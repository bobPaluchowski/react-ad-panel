import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => (
  <Container style={{ textAlign: "center", marginTop: "20px" }}>
    <Typography variant="h5" color="error">Access Denied</Typography>
    <Link to="/">
      <Button variant="contained" style={{ marginTop: "20px" }}>Go to Home</Button>
    </Link>
  </Container>
);

export default ErrorPage;

