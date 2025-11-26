<<<<<<< HEAD
import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [language, setLanguage] = useState("EN"); // EN / HI

  return (
    <section className="about-section" id="about">

      {/* ------------ LANGUAGE TOGGLE BUTTONS ------------ */}
      <div className="lang-toggle">
        <button
          className={language === "EN" ? "active-btn" : ""}
          onClick={() => setLanguage("EN")}
        >
          English
        </button>

        <button
          className={language === "HI" ? "active-btn" : ""}
          onClick={() => setLanguage("HI")}
        >
          हिन्दी
        </button>
      </div>

      {/* Heading */}
      <h2>
        {language === "EN"
          ? "Shri Ram Mandir, Raipur – A Spiritual Landmark of Chhattisgarh"
          : "श्री राम मंदिर, रायपुर – छत्तीसगढ़ का एक दिव्य आध्यात्मिक धरोहर"}
      </h2>

      {/* ------------ IMAGE + CONTENT CONTAINER ------------ */}
      <div className="about-container">

        {/* Images */}
        <div className="ram-img-wrapper animate-left">
          <img src="../Assets/ramji.jpg" alt="Lord Ram" className="ram-img" />
        </div>

        <div className="ram-img-wrapper animate-right">
          <img src="../Assets/hanumanji.png" alt="Lord Hanuman" className="ram-img" />
        </div>

        <div className="ram-img-wrapper animate-right">
          <img src="../Assets/ramlalla2.jpg" alt="Ram Lalla" className="ram-img" />
        </div>

        <div className="ram-img-wrapper animate-left">
          <img src="../Assets/hanumanji2.jpg" alt="Lord Hanuman" className="ram-img" />
        </div>

        {/* ------------ MAIN TEXT CONTENT ------------ */}
        <div className="about-text-box animate-bottom animate-delay-3">
          {language === "EN" ? (
            <>
              <p><b>Location:</b> VIP Road, Raipur, Chhattisgarh</p>

              <p>
                Shri Ram Mandir in Raipur is a grand spiritual center dedicated to Lord Ram and Mata Sita.
                Inaugurated in 2017, the temple stands as a symbol of Chhattisgarh’s deep-rooted devotion.
                Skilled artisans from Rajasthan and Odisha contributed to its traditional architecture.
              </p>

              <h3>Why It Was Built</h3>
              <p>
                Chhattisgarh is believed to be the maternal land of Mata Kaushalya.
                This temple was built to honor that sacred connection and to create a spiritual
                and cultural hub for devotees.
              </p>

              <h3>Key Features of the Temple</h3>
              <ul>
                <li>Magnificent idols of Shri Ram & Sita carved from a single stone.</li>
                <li>Presence of Hanuman Ji and 16 other deities in the premises.</li>
                <li>105-feet high temple structure with gardens & artistic lighting.</li>
                <li>Dedicated Yagya Shala & Navagraha Mandir.</li>
                <li>Community service including subsidized meals for devotees.</li>
              </ul>

              <h3>Special Highlights</h3>
              <p>
                Various spiritual and devotional events like bhajans, satsang, Hanuman Chalisa,
                and Sundarkand recitations are organized regularly.
              </p>

              <h3>Community Services</h3>
              <p>
                Free meals, prasad distribution, Annakoot, and charity programs are arranged
                frequently with participation of volunteers.
              </p>

              <h3>Bhandara</h3>
              <p>
                A daily bhandara is organized with thousands of devotees receiving free prasad.
                The entire service is volunteer-driven and devotional.
              </p>

              <h3>Temple Architecture</h3>
              <p>
                Built in traditional style with detailed stone carvings crafted by artisans
                from Rajasthan and Odisha. The grand sanctum and spacious courtyard enhance its beauty.
              </p>

              <h3>Religious & Social Programs</h3>
              <p>
                The temple hosts large-scale devotional events such as bhajan evenings,
                Sundarkand path, Hanuman Chalisa, and Ramcharitmanas discourses.
              </p>
              <p>
                Devotees actively contribute to service, making the temple a center of unity.
              </p>

              <h3>Food Service</h3>
              <p>
                Free food is served daily to thousands of devotees.
                On festivals, massive Annakoot and Bhandara events are organized.
              </p>

              <p>
                Shri Ram Mandir is not just a place of worship — it is a center of culture,
                devotion, spirituality, and community welfare.
              </p>

              <h3>Hostel & Education</h3>
              <p>
                The temple runs a hostel offering students a disciplined spiritual environment,
                along with Vedic teachings, mantra practice, yoga, and meditation.
              </p>

              <h3>Gau Shala</h3>
              <p>
                A well-maintained cowshed is operated inside the premises where cows are served
                with devotion. Organic compost from the cowshed is used for temple gardens.
              </p>
            </>
          ) : (
            <>
              <p><b>स्थान:</b> वीआईपी रोड, रायपुर, छत्तीसगढ़</p>

              <p>
                रायपुर का श्री राम मंदिर भगवान राम और माता सीता को समर्पित एक भव्य आध्यात्मिक केंद्र है।
                वर्ष 2017 में उद्घाटन किए गए इस मंदिर में राजस्थान और ओडिशा के शिल्पकारों ने पारंपरिक
                वास्तुकला को सुंदर रूप दिया है।
              </p>

              <h3>मंदिर क्यों बनाया गया</h3>
              <p>
                छत्तीसगढ़ माता कौशल्या की जन्मभूमि माना जाता है।
                इसी कारण भगवान राम के इस दिव्य मंदिर का निर्माण किया गया ताकि भक्तों को आध्यात्मिक
                और सांस्कृतिक वातावरण मिल सके।
              </p>

              <h3>मंदिर की प्रमुख विशेषताएँ</h3>
              <ul>
                <li>एक ही पत्थर से बनी श्री राम एवं सीता की भव्य मूर्तियाँ।</li>
                <li>हनुमान जी सहित 16 अन्य देवताओं की प्रतिष्ठा।</li>
                <li>105 फीट ऊँचा मंदिर, सुंदर उद्यान तथा आकर्षक लाइटिंग।</li>
                <li>विशेष यज्ञशाला एवं नवग्रह मंदिर।</li>
                <li>भक्तों के लिए निःशुल्क व रियायती भोजन सेवा।</li>
              </ul>

              <h3>विशेष आकर्षण</h3>
              <p>
                मंदिर परिसर में भजन, सत्संग, हनुमान चालीसा और सुंदरकांड जैसे अनेक कार्यक्रम
                नियमित रूप से आयोजित किए जाते हैं।
              </p>

              <h3>सेवा कार्य</h3>
              <p>
                अन्नकूट, भंडारा, प्रसाद वितरण एवं विभिन्न सामाजिक सेवाएँ भक्तों और स्वयंसेवकों
                की सहायता से निरंतर चलाई जाती हैं।
              </p>

              <h3>भंडारा</h3>
              <p>
                प्रतिदिन विशाल भंडारा आयोजित होता है जहाँ हजारों भक्त निःशुल्क प्रसाद ग्रहण करते हैं।
              </p>

              <h3>मंदिर की वास्तुकला</h3>
              <p>
                राजस्थान और ओडिशा के शिल्पकारों द्वारा बनाई गई नक्काशियाँ मंदिर को अद्वितीय बनाती हैं।
                विशाल गर्भगृह और सुंदर प्रांगण इसकी भव्यता को और बढ़ाते हैं।
              </p>

              <h3>धार्मिक एवं सामाजिक कार्यक्रम</h3>
              <p>
                रामचरितमानस पाठ, सुंदरकांड, हनुमान चालीसा, भजन संध्या और विशेष प्रवचन बड़े पैमाने पर आयोजित किए जाते हैं।
              </p>
              <p>
                भक्तगण सेवा कार्यों में सक्रिय रहते हैं जिससे मंदिर सामाजिक एकता का केंद्र बन गया है।
              </p>

              <h3>भोजन सेवा</h3>
              <p>
                प्रतिदिन निःशुल्क भोजन सेवा की जाती है।
                त्योहारों पर विशाल अन्नकूट और भंडारे के आयोजन होते हैं।
              </p>

              <p>
                श्री राम मंदिर केवल पूजा स्थल ही नहीं, बल्कि संस्कृति, सेवा और आध्यात्मिकता का केंद्र है।
              </p>

              <h3>आवास एवं शिक्षा</h3>
              <p>
                मंदिर द्वारा संचालित छात्रावास में बच्चों को अनुशासित, आध्यात्मिक व संस्कारयुक्त वातावरण में शिक्षा प्रदान की जाती है।
              </p>

              <h3>गौशाला</h3>
              <p>
                मंदिर परिसर में एक सुंदर गौशाला संचालित है जहाँ गायों की सेवा, देखभाल और पोषण अत्यंत श्रद्धा के साथ किया जाता है।
              </p>
            </>
          )}
=======
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>Shri Ram Mandir, Raipur – A Spiritual Landmark of Chhattisgarh</h2>

      {/* About Content Container */}
      <div className="about-container">
        {/* Decorative Lord Ram Images with wrapper */}
        <div className="ram-img-wrapper animate-left">
          <img
            src="../Assets/ramji.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>

        <div className="ram-img-wrapper animate-right">
          <img
            src="../Assets/hanumanji.png"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>

<div className="ram-img-wrapper animate-right">
          <img
            src="../Assets/ramlalla2.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>
         <div className="ram-img-wrapper animate-left">
          <img
            src="../Assets/hanumanji2.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>
        {/* Main Content Box */}
        <div className="about-text-box animate-bottom animate-delay-3">
          <p>
              <b> Location</b>: VIP Road, Raipur, Chhattisgarh
          </p>
          <p>
        
          Shri Ram Mandir in Raipur is a prominent temple dedicated to Lord Ram and Sita, inaugurated in 2017. The temple was built under the guidance of Chief Minister Raman Singh, with skilled artisans from Rajasthan and Odisha contributing to its traditional architecture.
          </p>

          <p>
            <h3>Why It Was Built</h3>
  Chhattisgarh holds a special place in Lord Ram’s story — it is believed to be the maternal home of Mata Kaushalya, Ram’s mother. The temple was constructed to strengthen this spiritual connection and serve as a center for devotion, worship, and cultural heritage.
          </p>

          <p>
            <h3>Key Features</h3>
          <ul>
            <li>Idols of Lord Ram and Sita in a rare seated posture, carved from a single stone</li>
            <li>Presence of Hanuman and 16 other deities</li>
            <li>Magnificent 105-feet high structure with gardens, fountains, and decorative lighting</li>
            <li>Facilities like yagya shala and navagraha shrine</li>
            <li>Community services including subsidized meals for devotees</li>
          </ul>
          </p>

          <p>
            <h3>Significance</h3>
          Shri Ram Mandir is more than just a temple — it is a spiritual hub, a cultural landmark, and a symbol of Chhattisgarh’s devotion to Lord Ram. It attracts devotees from across the state, especially during festivals like Ramnavami, and contributes to preserving the region’s rich heritage.
          </p>
>>>>>>> 1baeffa9a5f3de632b379ceccbc24c3a8f633c19
        </div>
      </div>
    </section>
  );
};

export default About;
