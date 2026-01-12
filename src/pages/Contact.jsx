import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setTimeout(() => setAnimate(true), 120);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://portfolio-backend-257s.onrender.com/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});


      const data = await res.json();

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "❌ Failed to send message");
      }
    } catch (err) {
      alert("⚠️ Server not running or network error");
    }
  };

  return (
    <section className="contact-section">
      <div className={`contact-card ${animate ? "enter" : ""}`}>
        <h1>Ready to Collaborate?</h1>

        <p className="subtitle">
          Floating through space with ideas?  
          Let’s build something meaningful together.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            required
            value={formData.message}
            onChange={handleChange}
          />

          <p className="note">
            This message will be delivered to <b>Navadeep</b>.
          </p>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
