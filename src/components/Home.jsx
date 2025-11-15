import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1>Welcome to Ram Mandir Seva</h1>
        <p>
          A sacred initiative to serve the divine Ram Mandir — a symbol of peace,
          devotion, and unity. Join us in this noble cause.
        </p>
        <a href="#donation" className="btn-primary">Contribute Now</a>
      </div>
    </section>
  );
};

export default Home;
