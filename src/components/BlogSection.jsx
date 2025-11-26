import React from "react";
import "./Blog.css";

const blogPosts = [
   {
    id: 1,
    title: "छत्तीसगढ़ में भांजे के चरणस्पर्श की परंपरा – श्रीराम जी के प्रति अपार श्रद्धा",
    image: "../Assets/blog1.jpeg",
    description:
      "छत्तीसगढ़ में भगवान श्रीराम को ‘भांजा’ मानने की परंपरा प्राचीन कौशल प्रदेश और माता कौशल्या से जुड़ी है। त्योहारों पर भांजे का सम्मान करना इसी दिव्य संबंध की स्मृति है।"
  },
  {
    id: 4,
    title: "A Spiritual Visit – Amit Shah at a Temple in Raipur",
    image: "../Assets/amitji.jpg",
    description:
      "A reflective spiritual moment as Home Minister Amit Shah visited a temple in Raipur, offering prayers and expressing reverence for the region’s deep cultural and devotional heritage"
  },
  {
    id: 2,
    title: "A Spiritual Visit – Yogi Adityanath at Ram Mandir, Raipur",
    image: "../Assets/yogiji.jpg",
    description:
      "A serene spiritual moment as Yogi Adityanath visited the Ram Mandir in Raipur, offering prayers and connecting with the deep devotion and cultural heritage of Chhattisgarh."
  },
  {
    id: 3,
    title: "A Spiritual Visit – Rajnath Singh at Ram Mandir, Raipur",
    image: "../Assets/Rajnathji.png",
    description:
      "A peaceful and devotional moment as Rajnath Singh visited the Ram Mandir in Raipur, offering prayers and experiencing the spiritual essence of Chhattisgarh’s cherished temple."
  },

 
 
];

const BlogSection = () => {
  return (
    <section className="blog-section" id="blog">
      <h2 className="blog-title">Latest Blogs</h2>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />

            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
