import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import ProductImage from "./components/ProductImage";
import "./App.css";

function App() {
  const firstName = "Jefferson";
  const profileImage = "https://imgv3.fotor.com/images/gallery/generate-a-realistic-ai-avatar-of-a-formal-man-in-fotor.jpg";

  return (
    <div className="app-container">

      {/* Top-left profile and greeting */}
      {firstName && (
        <div className="top-left-greeting d-flex align-items-center">
          <img src={profileImage} alt="Greeting" className="greeting-img" />
          <h3 className="ms-2">Hello, {firstName}!</h3>
        </div>
      )}

      {/* Centered Product Card */}
      <Container className="mt-5 d-flex flex-column align-items-center">
        <Card style={{ width: "350px" }} className="p-3 product-card shadow-lg">
          <Card.Body>
            <ProductImage />
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
      </Container>

    </div>
  );
}

export default App;
