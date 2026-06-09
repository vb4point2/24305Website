import './Carousel.css';

export default function Carousel() {
    const companies = [
        "Your Company Here",
        "Your Company Here",
        "Your Company Here",
        "Your Company Here",
        "Your Company Here",
        "Your Company Here",
        "Your Company Here",
        "Your Company Here"
    ];

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="carousel-track">
                    {companies.map((name, index) => (
                        <div key={`track-1-${index}`} className="carousel-item">
                            {name}
                        </div>
                    ))}
                    {companies.map((name, index) => (
                        <div key={`track-2-${index}`} className="carousel-item">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
