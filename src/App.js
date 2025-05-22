


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import properties from './Component/Properties';
import Contact from "./Component/Contact";
import "./App.css";

function Home() {
  const [selectedType, setSelectedType] = useState("All");
  const navigate = useNavigate();

  const filteredProperties =
    selectedType === "All"
      ? properties
      : properties.filter((p) => p.type === selectedType);

  const handleContactClick = (property) => {
    navigate(`/contact/${property.id}`);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Real Estate Listings</h1>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Villa">Villa</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
        </select>
      </header>

      <div className="property-grid">
        {filteredProperties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-info">
              <h2>{property.title}</h2>
              <p>{property.location}</p>
              <p className="price">{property.price}</p>
              <button className="buy-btn"onClick={() => handleContactClick(property)}>
                Contact Agent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
