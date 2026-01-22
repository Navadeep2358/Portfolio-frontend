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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    } catch (error) {
      alert("⚠️ Backend server not running");
      console.error(error);
    }
  };

  return (
    <section className="contact-section">
      <div className={`contact-card ${animate ? "enter" : ""}`}>
        <h1>Ready to Collaborate?</h1>

        <p className="subtitle">
          Floating through space with ideas? Let’s build something meaningful.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <p className="note">
            This message will be emailed to <b>Navadeep</b>.
          </p>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
