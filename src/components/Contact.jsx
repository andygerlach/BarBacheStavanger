import '../modules/Contact.modules.css';


export default function Contact() {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to get in touch, please reach out to us!</p>
            <form>
                
                <input type="text" placeholder="Your Name" maxLength={50} required/>
                <br/>
                <input type="email" placeholder="Your Email" maxLength={75} required/>
                <br/>
                <textarea placeholder="Your Message" maxLength={500} required/>
                <br/>
                <button type="submit" style={{ display: "block", margin: " auto auto", }}>Send Message</button>
            </form>
        
        </div>
    )
};