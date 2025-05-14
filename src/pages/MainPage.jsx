import { useState } from "react";
import { Button } from "../components/button";

export const MainPage = () => {
  const [clickCount, setClickCount] = useState(0);

  // Логика кнопки About Us
  const handleAboutClick = () => {
    console.log("About Us clicked");
    setClickCount((prev) => prev + 1);
  };

  // Логика кнопки Sign In
  const handleSignInClick = () => {
    console.log("Sign In clicked");
  };

  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <h1>Little story about the company</h1>

      {/* Кнопка About Us */}
      <Button onClick={handleAboutClick} variant="outlined" color="secondary" sx={{ mr: 2 }}>
        About Us
      </Button>

      {/* Кнопка Sign In */}
      <Button onClick={handleSignInClick} variant="contained">
        Sign In
      </Button>

      <p>Кнопка About Us нажата {clickCount} раз</p>
    </div>
  );
};
