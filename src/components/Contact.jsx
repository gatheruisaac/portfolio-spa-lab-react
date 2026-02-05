export default function Contact() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <form>
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message..." rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
