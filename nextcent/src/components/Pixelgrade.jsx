import React, { useEffect, useState } from "react";

export default function Pixelgrade() {
  const [pixel, setPixel] = useState(null);

  useEffect(() => {
    fetch("http://localhost/landing/getPixelgrade.php")
      .then((res) => res.json())
      .then((data) => setPixel(data))
      .catch((err) => console.error("Error fetching Pixelgrade:", err));
  }, []);

  if (!pixel) return null; // avoid rendering until data loads

  return (
    <section className="pixelgrade section">
      <div className="container split-reverse">
        <div>
          <img src={`/images/${pixel.image}`} alt="Pixelgrade" />
        </div>
        <div>
          <h1 className="text-grey">{pixel.title}</h1><br/>
          <p>{pixel.description}</p><br/>
          <button className="btn btn-primary">{pixel.button_text}</button>
        </div>
      </div>
    </section>
  );
}
