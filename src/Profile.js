import React from "react";

import { PersonAdd } from "@mui/icons-material";
export default function Profile() {
  const arr = [
    "shan taylor",
    "Mary Angela",
    "Kyon Cho Chi",
    "Paul Livingstone",
    "sara Jay",
    "Donald",
  ];
  const images = [
    "https://th.bing.com/th/id/OIP.JRX5lcIdw3XMhifgGwpiyQHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.g97Q7bD9HmchVMtp4igtyQAAAA?w=400&h=400&rs=1&pid=ImgDetMain",
    "https://media.licdn.com/dms/image/C4E03AQE7Gr23J2p2IA/profile-displayphoto-shrink_800_800/0/1660140465659?e=2147483647&v=beta&t=c8kPOZd7w_KTnzaZWWMxttt_qhuToUqM_2hdtEFR0JM",
    "https://th.bing.com/th/id/R.837b7f79f0c3825d6fa1e47761d32bf3?rik=zJRnEBndjwtRJA&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5c0928d475f9ee4804d37934%2ft%2f6574b8cc850d1c6f3b9c70b9%2f1702148331290%2f5Q5A2277.jpg%3fformat%3d1500w&ehk=uBkA8iZ1DeBJgCNtfZScHLz6iPIhglqBx7qx6fipNpQ%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.b47210e19f42d75d8c5de40c0f28e610?rik=oWvErXCuVLM6OQ&riu=http%3a%2f%2fmedia.istockphoto.com%2fphotos%2flatin-young-man-in-a-studio-picture-id494711330%3fk%3d6%26m%3d494711330%26s%3d170667a%26w%3d0%26h%3d7ac_j78C-P4mD5JaqHkZ5hRvfSmmZUTq3c0HKl08jak%3d&ehk=6zdnkYZhYyfnvNuf5Uy1DVE2h5qTE0fmWfZ8%2fajy1MQ%3d&risl=&pid=ImgRaw&r=0",
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "200px",
          color: "#33FF57",
        }}
      >
        <PersonAdd style={{ marginRight: "10px" }} />
        <h2>Creators you should follow</h2>
      </div>
      {/* <br /> */}
      {/* <br /> */}
      <div
        className="whole"
        style={{
          display: "flex",
          // justifyContent: "space-around",
          alignItems: "center",
          gap: "40px",
          marginTop: "20px",
          flexWrap: "wrap",
          marginLeft: "200px",
        }}
      >
        {arr.map((profile, index) => (
          <div
            key={index}
            className="profile-card"
            style={{
              width: "150px",
              height: "200px",
              border: "2px solid black",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <div
              className="img"
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "100px",
                height: "100px",
                margin: "0 auto",
              }}
            >
              <img
                src={images[index]}
                alt="Profile"
                style={{
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </div>
            <h3 style={{ margin: "10px 0" }}>{profile}</h3>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#888" }}>
              Tech Mint
            </p>
            <button
              style={{
                padding: "8px 20px",
                border: "none",
                borderRadius: "2px",
                background: "deepskyblue",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background 0.3s ease-in-out",
                borderRadius: "20px",
              }}
            >
              FOLLOW
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
