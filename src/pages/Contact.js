import banner from '../assets/contact.jpg';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact" style={{backgroundImage: `url(${banner})`}}>
      <div className="contact-container">
        <form className="contact-form">
          <h1>Contact Us</h1>
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter Full Name..."/>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Enter Email..."/>
          <label htmlFor="name">Occation/Event</label>
          <input name="name" type="text" placeholder="Occation or event..."/>
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter Message" name="message" required></textarea>
          <button type="submit" name="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
