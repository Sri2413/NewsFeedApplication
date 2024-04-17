import React, { useState, useEffect, useRef } from "react";
import "./aside.css";
import "./App.css";
import Cards from "./Cards";
import Footer from "./Footer";
import Profile from "./Profile";
import TopStories from "./TopStories";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);

  const searchInputRef = useRef(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${selectedCategory}&from=2024-04-01&to=2024-04-30&sortBy=popularity&apiKey=3f8d999790e146a5a6d8b5988f2f76ec`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAllArticles(data.articles);
        setFilteredArticles(data.articles);
        console.log(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredArticles(allArticles);
    } else {
      const filtered = allArticles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchTerm, allArticles]);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);
  return (
    <>
      <div style={{ marginTop: "2x" }}>
        <aside className="sidebar" style={{ marginTop: "20px" }}>
          <ul className="sidebar-list">
            <span
              style={{
                textAlign: "center",
                color: "#33FF57",
                justifyContent: "center",
                // padding: "60px",
                // padding: "20px",
                paddingLeft: "40px",
                fontSize: "20px",
              }}
            >
              BB NEWS
            </span>
            <br />
            <br />
            <li onClick={() => handleClick("top-stories")} className="list1">
              <HomeIcon /> Top-stories
            </li>
            <li className="list1">
              <LanguageIcon />
              Around the world
            </li>
            <li onClick={() => handleClick("business")} className="list1">
              <WorkOutlineIcon /> Business
            </li>
            <li onClick={() => handleClick("health")} className="list1">
              <HealthAndSafetyIcon />
              Health
            </li>
            <hr />
            <li onClick={() => handleClick("covid-19")} className="list1">
              <CoronavirusIcon /> Covid-19
            </li>
            <hr />
            <li onClick={() => handleClick("entertainment")} className="list1">
              <PlayCircleIcon />
              Entertainment
            </li>
            <li onClick={() => handleClick("sports")} className="list1">
              <WorkspacePremiumIcon /> Sports
            </li>
            <li className="list1">
              {" "}
              <ChatIcon />
              Discussion
            </li>
            <li className="list1">
              <NotificationsActiveIcon />
              Notifications
            </li>
            <li className="list1">
              {" "}
              <SettingsSuggestIcon />
              News feed setting
            </li>
          </ul>
        </aside>
      </div>
      <div className="container">
        <input
          ref={searchInputRef}
          style={{ marginLeft: "200px" }}
          className="search-input"
          type="search"
          placeholder="search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="top-stories" style={{ marginLeft: "200px" }}>
        <h2
          style={{
            marginLeft: "25px",
            display: "flex",
            flexWrap: "wrap",
            color: "#33FF57",
          }}
        >
          Top stories for you
        </h2>
        <ul className="top-stories-list">
          <li onClick={() => handleClick("science")}>All</li>
          <li onClick={() => handleClick("android")}>Android</li>
          <li onClick={() => handleClick("cricket")}>Cricket</li>
          <li onClick={() => handleClick("iphone")}>iPhone</li>
          <li onClick={() => handleClick("google")}>Google</li>
          <li onClick={() => handleClick("nanotechnology")}>Nano Technology</li>
          <li onClick={() => handleClick("mentalhealth")}>Mental Health</li>
        </ul>
        <div>
          <TopStories />

          <Cards
            articles={filteredArticles}
            showMore={showMore}
            setShowMore={setShowMore}
          />
        </div>
      </div>
      <Profile />
      <Footer />
    </>
  );
}
