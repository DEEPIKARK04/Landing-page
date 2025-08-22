import React, { useEffect, useState } from "react";

export default function CTA() {
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/landing/getCTA.php") // update with your path
      .then((res) => res.json())
      .then((data) => setCtaData(data));
  }, []);

  if (!ctaData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 dangerouslySetInnerHTML={{ __html: ctaData.title }} />
        <a href="#" className="cta-button">
          {ctaData.button_text}
        </a>
      </div>
    </section>
  );
}
