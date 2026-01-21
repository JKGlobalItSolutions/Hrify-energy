import '../styles/freeHomeVisit.css';
import { CheckCircle2 } from 'lucide-react';
import img_2 from '../../assets/Banner_3.png';
import img_3 from '../../assets/img_3.png';

const FreeHomeVisit = () => {
    return (
        <main className="fhv-main">
            {/* Hero Section */}
            <section className="fhv-hero">
                <div className="fhv-hero-container">
                    <img src={img_2} alt="Free Home Visit Hero" className="fhv-hero-img" />
                </div>
            </section>

            {/* Header Banner */}
            <section className="fhv-header-banner">
                <div className="container">
                    <h1 className="fhv-title">Free Home Visit</h1>
                </div>
                <div className="fhv-blue-banner">
                    <p>Our solar expert will visit your home and assess your rooftop for installation.</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="fhv-description">
                <div className="container">
                    <div className="fhv-description-box">
                        <p>
                            Our certified solar expert will visit your home to conduct a detailed rooftop assessment,
                            evaluating your space, sunlight exposure, and energy needs. We provide a personalized
                            solar plan tailored to your home, along with a clear estimate of potential savings and system size.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="fhv-features">
                <div className="container">
                    <div className="fhv-features-grid">
                        <div className="fhv-features-left">
                            <ul className="fhv-checklist">
                                <li>
                                    <CheckCircle2 className="fhv-check-icon" size={24} />
                                    <span>Expert guidance from certified solar professionals</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="fhv-check-icon" size={24} />
                                    <span>Accurate assessment of rooftop suitability</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="fhv-check-icon" size={24} />
                                    <span>Customized solar solutions for maximum efficiency</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="fhv-check-icon" size={24} />
                                    <span>Transparent cost & savings estimate</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="fhv-check-icon" size={24} />
                                    <span>Hassle-free installation planning</span>
                                </li>
                            </ul>
                        </div>
                        <div className="fhv-features-right">
                            <div className="fhv-img-wrapper">
                                <img src={img_3} alt="Solar Installation Assessment" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FreeHomeVisit;
