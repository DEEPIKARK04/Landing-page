import React, { useEffect, useState } from "react";

export default function BlogSection() {
  const [section, setSection] = useState({ header: "", subhead: "" });
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost/landing/getBlogs.php")  
      .then((res) => res.json())
      .then((data) => {
        setSection(data.section);
        setBlogs(data.blogs);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>{section.header}</h2>
        <p>{section.subhead}</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-overlay">
              <h3>{blog.title}</h3>
              <a href="#" className="read-more">
                Read more <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
