import React from "react";
import "./livearti.css";

const LiveAarti = () => {
  return (
    <section className="aarti-section" id="livearti">
      <h2 className="aarti-title">
        🔱 Live Aarti Darshan
        <span className="live-dot"></span>
      </h2>

      <div className="aarti-container">
        <iframe
          className="aarti-video"
          src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=1&mute=1"
          title="Live Aarti"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="aarti-caption">
        Experience the divine Ram Mandir Aarti live from Ayodhya.
      </p>
    </section>
  );
};

export default LiveAarti;
