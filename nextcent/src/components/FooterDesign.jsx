import React, { useEffect, useState } from "react";

export default function FooterDesign() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/landing/getFooterdesign.php")
      .then((res) => res.json())
      .then((data) => setFooterData(data))
      .catch((err) => console.error("Error fetching footer design:", err));
  }, []);

  if (!footerData) return <p>Loading...</p>;

  return (
    <section className="footer-design section">
      <div className="container split-reverse">
        <div className="footer-design-image">
          <img src={footerData.image} alt="Footer Design Illustration" />
        </div>
        <div className="footer-design-text">
          <h2>{footerData.title}</h2><br />
          <p>{footerData.description}</p><br />
          <button className="btn btn-primary">{footerData.button_text}</button>
        </div>
      </div>
    </section>
  );
}
