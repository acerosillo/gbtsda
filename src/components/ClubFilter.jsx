import React, { useState } from "react";
import { clubsData } from "../data/clubsData"; // Ensure this path is correct

const ClubFilter = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");
  
  // Generate a list of counties including "All"
  const counties = ["All", ...new Set(clubsData.map((club) => club.location))];

  // Filter clubs based on selected county
  const filteredClubs =
    selectedCounty === "All"
      ? clubsData
      : clubsData.filter((club) => club.location === selectedCounty);

  return (
    <>
      <div>
        <div>
          {/* Render county buttons */}
          {counties.map((county) => (
            <button
              key={county}
              onClick={() => setSelectedCounty(county)}
              style={{
                color: selectedCounty === county ? "#ffffff" : "",
                marginRight: "10px",
                backgroundColor: selectedCounty === county ? "#e43c5c" : "",
                padding: "10px",
                border: "1px solid black",
                cursor: "pointer"
              }}
              className="button-tag"
            >
              {county}
            </button>
          ))}
        </div>
        <ul className="contact-list" id="myUL">
          {/* Render filtered clubs */}
          {filteredClubs.map((club, index) => (
            <li key={index}>
              <h3 className="name">{club.instructor}</h3>
              <address>
                {club.address?.location_name}<br />
                {club.address?.street}<br />
                {club.address?.city}<br />
                {club.address?.postal_code}<br />
              </address>
              <br />
              <h4>Phone: <a href={`tel:${club.contact?.phone}`}>{club.contact?.phone}</a></h4> 
              <h4>Email: <a href={`mailto:${club.contact?.email}`}>{club.contact?.email}</a></h4> 
              <h4>Training times:</h4>
              <br />
              <ul>
                {club.training_times?.map((time, idx) => (
                  <li key={idx}><i className="bx bx-chevron-right"></i> {time}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ClubFilter;
