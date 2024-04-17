import React from "react";
import "./App.css";

export default function Cards({ articles, showMore, setShowMore }) {
  const handleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const displayLimit = showMore ? articles.length : 12;

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.slice(0, displayLimit).map((article, index) => (
          <div
            key={index}
            style={{
              width: "390px",
              margin: "10px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
              textAlign: "justify",
            }}
            className="card"
          >
            <h2 style={{ color: "black", textAlign: "justify" }}>
              {article.title}
            </h2>
            <p style={{ opacity: "0.7", color: "black", textAlign: "justify" }}>
              {article.description}
            </p>
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ maxWidth: "100%" }}
            />
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more...
            </a>
          </div>
        ))}
      </div>
      <button
        className="b"
        style={{
          color: "white",
          backgroundColor: " #223232",
          border: "2px solid white",
          width: "140px",
          height: "40px",
          // padding: "15px",
        }}
        onClick={handleShowMore}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
}
