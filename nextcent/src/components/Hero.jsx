import React, { useEffect, useState } from "react";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch("http://localhost/landing/getHero.php")
      .then((res) => res.json())
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, []);

  if (!hero) return <p>Loading...</p>;

  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div>
          <h2>{hero.title}</h2>
          <p>{hero.subtitle}</p>
          <div className="cta">
            <button className="btn btn-primary">{hero.button_text}</button>
          </div>
        </div>
        <div>
          <img
            className="hero-illustration"
            src={hero.image_path}
            alt="Hero Illustration"
          />
        </div>
      </div>
      <div className="nav-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
