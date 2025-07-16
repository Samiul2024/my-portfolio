import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    )
    .then((result) => {
      alert("Message sent!");
    }, (error) => {
      alert("Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <form  id="home" ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 mb-4 border rounded" />
      <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 mb-4 border rounded" />
      <textarea name="message" placeholder="Your Message" required className="w-full p-3 mb-4 border rounded h-32" />
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
        Send Message
      </button>
    </form>
  );
}
