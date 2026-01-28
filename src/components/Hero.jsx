
import '../modules/Hero.modules.css';


export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Bar Bache</h1>
                <p>Your cozy neighborhood whiskey bar.</p>
                 <div className="socials">
                <a href="https://www.instagram.com/bar_bache/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Instagram_Glyph_Gradient.svg" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/barbachestavanger/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/Facebook_Logo_Primary.png" alt="Facebook" className="social-icon" />
                </a>
            </div>
            </div>
           <div className="hero-image">
            <img src="/images/Lamp.png" alt="Cozy Tiffany Lamp" className="hero-img" />
           </div>
        </div>
        
    )
}