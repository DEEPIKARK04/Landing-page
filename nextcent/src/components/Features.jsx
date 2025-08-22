import React, { useEffect, useState } from "react";

export default function Features() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://localhost/landing/getFeatures.php")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Manage your entire community in a single system</h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className="features-cards">
        {features.map((item) => (
          <div className="feature-card" key={item.id}>
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
