import React, { useState, useEffect } from "react";
import Climate from "./Climate";
import Newsletter from "./Newsletter";

export default function TopStories() {
  const [topdata, setTopdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=top-stories&from=2024-04-14&to=2024-04-30&sortBy=popularity&apiKey=3f8d999790e146a5a6d8b5988f2f76ec"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setTopdata(data.articles[1]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          width: "830px",
          height: "400px",
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "18px",
          borderRadius: "6px",
          textAlign: "center",
        }}
        className="TopStories"
      >
        <h2>{topdata.title}</h2>
        <p style={{ opacity: "0.7" }}>{topdata.description}</p>
        <img
          src={topdata.urlToImage}
          alt={topdata.title}
          style={{ width: "100%", height: "50%", objectFit: "cover" }}
        />
        {/* <br />
        <br />
        <br /> */}{" "}
        <a
          style={{ textAlign: "center", justifyContent: "center" }}
          href={topdata.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more...
        </a>
      </div>
      <div
        style={{
          //   display: "flex",
          //   gap: "10px",
          marginLeft: "680px",

          marginTop: "-420px",
          color: "black",
          textAlign: "left",
        }}
      >
        <Climate />
        &nbsp;
        <Newsletter />
        <br />
        <br />
        <br />
        {/* <br /> */}
      </div>
    </>
  );
}
