import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Ram Mandir</h2>

      {/* About Content Container */}
      <div className="about-container">
        {/* Decorative Lord Ram Images */}
        <img
          src="../Assets/ramlalla4.jpeg"
          alt="Lord Ram"
          className="ram-img"
        />
        <img
          src="../Assets/ramlalla2.jpg"
          alt="Lord Ram"
          className="ram-img"
        />

        {/* Main Content Box */}
        <div className="about-text-box">
          <p>
            Long ago, in the age of Aryavarta, the land that is now called
            Chhattisgarh was known as Kaushal Pradesh, ruled by the wise King
            Sukaushal.
          </p>

          <p>
            His daughter, Princess Kaushalya—believed to be the rebirth of Queen
            Amrit Prabha—became the bride of King Dasharatha of Ayodhya.
          </p>

          <p>
            After a sacred yagya, King Dasharatha was blessed with four sons: Shri
            Ram, Bharata, Lakshmana, and Shatrughna. Shri Ram, the eldest, later
            became the embodiment of righteousness and the hero of the Ramayana.
          </p>

          <p>
            Because Princess Kaushalya belonged to Kaushal Pradesh, the people
            lovingly regarded Lord Ram and His brothers as their nephews. From
            this bond arose a tradition of honoring nephews during festivals.
          </p>

          <p>
            Even today, in regions including Madhya Pradesh, Uttar Pradesh, Bihar,
            Jharkhand, and Odisha, the “bhanja” holds a special and sacred place
            in cultural rituals.
          </p>

          <p>
            Thus, through devotion and generations of folklore, the people of
            Chhattisgarh continue to see Lord Ram not only as a divine figure, but
            also as their beloved nephew.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
