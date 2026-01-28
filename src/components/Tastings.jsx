
import '../modules/Tastings.modules.css';


export default function Tastings() {

    return (
        <div className="tastings-container">
            <div className="tastings-header">
                <h2>Tastings</h2>
            </div>
            <div className="tastings-section">
                <div className="gin-tonic-tasting">
                    <div className='tasting-card'>
                        <h3>Gin & Tonic Tasting</h3>
                        <div className='tasting-info'>
                        <p>Join us for a delightful adventure into the world of gin, where we will introduce you to an amazing selection of gins, complete with their unique stories, botanical recipes, and tasting notes. Plus, we will suggest the perfect tonic and garnish pairings for each one! </p>
                        </div>
                        <button className="book-now-button">Book Now</button>
                    </div>

                </div>
                <div className="whiskey-tasting">
                    <div className='tasting-card'>
                        <h3>Whiskey Tasting</h3>
                        <div className='tasting-info'>
                        <p>Join us for an immersive whiskey tasting experience, showcasing a thoughtfully selected range of whiskeys. Discover the craftsmanship behind each bottle, from grain to glass, as we explore their history, maturation, and distinctive flavor profiles.</p>
                        </div>
                        <button className="book-now-button">Book Now</button>
                    </div>

                </div>
                <div className="premium-whiskey-tasting">
                    <div className='tasting-card'>
                        <h3>Top-Shelf Whiskey Tasting</h3>
                        <div className='tasting-info'>
                        <p>Indulge in a premium whiskey tasting designed for those who appreciate depth and distinction. Discover a selection of outstanding whiskeys, each chosen for its quality and character, as we delve into their heritage, production methods, and refined tasting notes.</p>
                        </div>
                        <button className="book-now-button">Book Now</button>
                    </div>

                </div>
                <div className="Akevitt-tasting">
                    <div className='tasting-card'>
                        <h3>Akevitt Tasting</h3>
                        <div className='tasting-info'>
                        <p>Join us for an exploration of aquavit, where centuries of Scandinavian tradition meet distinctive botanical flavors. From caraway and dill to citrus and spice, we’ll guide you through a curated selection of aquavits, uncovering their origins and tasting profiles.</p>
                        </div>
                        <button className="book-now-button">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    )
}