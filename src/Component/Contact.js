
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import properties from "./Properties";

function Contact() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [submittedReview, setSubmittedReview] = useState(null);

  if (!property) return <div>Property not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && rating > 0) {
      setSubmittedReview({ text: review, rating });
      setReview("");
      setRating(0);
    } else {
      alert("Please provide a rating and a review.");
    }
  };

  // Render stars for rating input
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{
            cursor: "pointer",
            color: i <= rating ? "#ffc107" : "#e4e5e9",
            fontSize: "24px",
          }}
          onClick={() => setRating(i)}
          onKeyDown={(e) => { if (e.key === "Enter") setRating(i); }}
          role="button"
          tabIndex={0}
          aria-label={`${i} star`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="contact-page">
      <h2>Contact Agent for:</h2>
      <h3>{property.title}</h3>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Email:</strong> {property.email}</p>
      <p><strong>Phone:</strong> {property.phone}</p>
      <Link to="/" className="back-btn">← Back to Listings</Link>

      <hr />

      <div className="review-section">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmit}>
          <div className="star-rating">{renderStars()}</div>
          <textarea value={review} onChange={(e) => setReview(e.target.value)}placeholder="Write your experience with the agent..."rows="4" required />
          <br />
          <button type="submit" className="submit-review">Submit Review</button>
        </form>

        {submittedReview && (
          <div className="submitted-review">
            <h4>Your Review:</h4>
            <div className="review-rating">
              {Array.from({ length: submittedReview.rating }).map((_, i) => (
                <span key={i} style={{ color: "#ffc107", fontSize: "20px" }}>★</span>
              ))}
              {Array.from({ length: 5 - submittedReview.rating }).map((_, i) => (
                <span key={i} style={{ color: "#e4e5e9", fontSize: "20px" }}>★</span>
              ))}
            </div>
            <p>{submittedReview.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
