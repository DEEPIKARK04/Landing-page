import React, { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost/landing/getClients.php")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  if (clients.length === 0) return <p>Loading...</p>;

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2 className="clients-title">{clients[0].title}</h2>
          <p className="clients-subtitle">{clients[0].subtitle}</p>
        </div>

        <div className="clients-logos">
          {clients.map((client, index) => (
            <img
              key={index}
              className="client-logo"
              src={client.logo_path}
              alt={`Client ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
