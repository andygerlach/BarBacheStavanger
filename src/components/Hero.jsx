import instagram from "../assets/Instagram_Glyph_Gradient.svg"
import facebook from "../assets/Facebook_Logo_Primary.png"
import lamp from "../assets/lamp.png"
import '../modules/Hero.modules.css';


export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Bar Bache</h1>
                <p>Your cozy neighborhood whiskey bar.</p>
                 <div className="socials">
                <a href="https://www.instagram.com/bar_bache/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/barbachestavanger/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
            </div>
            </div>
           <div className="hero-image">
            <img src={lamp} alt="Cozy Tiffany Lamp" className="hero-img" />
           </div>
        </div>
        
    )
}