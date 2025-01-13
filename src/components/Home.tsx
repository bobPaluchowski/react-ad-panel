import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import Quote from "./Quote";

const PASSWORD = "recruitment";

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const password = prompt("Enter password:");
    if (password === PASSWORD) {
      sessionStorage.setItem("auth", "true");
    } else {
      sessionStorage.setItem("auth", "false");
      navigate("/error");
    }
  }, [navigate]);

  return (
    <Container style={{ textAlign: "center", marginTop: "20px" }}>
      <Quote />
      <Link to="/ads">
        <Button variant="contained" style={{ marginTop: "20px" }}>Go to Ad Panel</Button>
      </Link>
    </Container>
  );
};

export default Home;

