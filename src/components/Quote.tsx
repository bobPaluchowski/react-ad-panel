import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const Quote: React.FC = () => {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational", {
      headers: { "X-Api-Key": "YOUR_API_KEY" },
    })
      .then((res) => res.json())
      .then((data) => setQuote(data[0]?.quote || "Stay positive and keep pushing forward!"))
      .catch(() => setQuote("Stay positive and keep pushing forward!"));
  }, []);

  return <Typography variant="h5">{quote}</Typography>;
};

export default Quote;

