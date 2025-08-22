import React, { useEffect, useState } from "react";

export default function Stats() {
  const [header, setHeader] = useState({});
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/landing/getStats.php")
      .then((res) => res.json())
      .then((data) => {
        setHeader(data.header);
        setStatsData(data.stats);
      })
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <section className="stats section">
      <div className="container split-reverse">
        {/* Title + Subtitle */}
        <div>
          <h2>
            {header?.title?.split("business")[0]}
            <span className="text-green">business</span>
            {header?.title?.split("business")[1]}
          </h2>
          <p className="lead">{header?.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat" key={index}>
              <img src={stat.icon} alt={stat.label} />
              <div>
                <div className="num">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
