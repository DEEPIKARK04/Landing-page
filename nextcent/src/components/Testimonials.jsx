import React, { useEffect, useState } from "react";
import "../App.css";

export default function Testimonials() {
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    fetch("http://localhost/landing/getTestimonial.php")
      .then((res) => res.json())
      .then((data) => setTestimonial(data))
      .catch((err) => console.error("Error fetching testimonial:", err));
  }, []);

  if (!testimonial) return <p>Loading...</p>;

  return (
    <section className="testimonials section">
      <div className="container testimonial-grid">
        {/* Left side — Image */}
        <div className="testimonial-image">
          <img src={testimonial.image} alt={testimonial.author} />
        </div>

        {/* Right side — Quote and info */}
        <div className="testimonial-content">
          <p className="quote">{testimonial.quote}</p>

          <div className="author">{testimonial.author}</div>
          <div className="org">{testimonial.organization}</div>

          {/* Logos + Link on same row */}
          <div className="testimonial-logos-row">
            <img src={testimonial.logo} alt="Customer Logos" />
            <div>
              <a href={testimonial.link} className="link-primary">
                Meet all customers →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
