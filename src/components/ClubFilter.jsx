import React, { useState } from "react";
import { clubsData } from "../data/clubsData"; // Ensure this path is correct

const ClubFilter = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");
  console.log(clubsData);
  // Generate a list of counties including "All"
  const counties = ["All", ...new Set(clubsData.map((club) => club.county))];

  // Filter clubs based on selected county
  const filteredClubs =
    selectedCounty === "All"
      ? clubsData
      : clubsData.filter((club) => club.county === selectedCounty);

  return (
    <div>
      <div>
        {/* Render county buttons */}
        {counties.map((county) => (
          <button
            key={county}
            onClick={() => setSelectedCounty(county)}
            style={{
              marginRight: "10px",
              backgroundColor: selectedCounty === county ? "lightblue" : "",
              padding: "10px",
              border: "1px solid black",
              cursor: "pointer"
            }}
          >
            {county}
          </button>
        ))}
      </div>
      <ul>
        {/* Render filtered clubs */}
        {filteredClubs.map((club, index) => (
          <li key={index}>{club.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClubFilter;
