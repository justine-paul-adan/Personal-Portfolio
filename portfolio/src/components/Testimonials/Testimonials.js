import React from "react";
import "./Testimonials.css";
import { portfolioData } from "../../data/templateData";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What People Say</h2>
        <p className="section-subtitle">
          Feedback from clients and collaborators
        </p>
        <div className="testimonials-grid">
          {portfolioData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-message">"{testimonial.message}"</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
