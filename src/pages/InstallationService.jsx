import '../styles/serviceDetail.css';
import Banner_6 from '../../assets/Banner_6.png';
import img_6 from '../../assets/img_6.png';

const InstallationService = () => {
    return (
        <main className="sd-main">
            {/* Hero Section */}
            <section className="sd-hero">
                <div className="sd-hero-container">
                    <img src={Banner_6} alt="High-Quality Installation Hero" className="sd-hero-img" />
                </div>
            </section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <h1 className="sd-title">High-Quality Installation in 24 hours</h1>
                </div>
                <div className="sd-blue-banner">
                    <p>Driven by Innovation. Powered by Solar.</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="sd-description">
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Your rooftop solar system will be installed promptly, cleanly, and professionally by our certified
                            experts, ensuring minimal disruption and maximum performance from day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="sd-content-section">
                <div className="container">
                    <div className="sd-grid">
                        <div className="sd-text-content">
                            <p>
                                Your rooftop solar system will be installed
                                promptly, cleanly, and professionally by trained
                                technicians who follow strict quality and safety
                                standards, ensuring a smooth installation process
                                and long-term energy savings.
                            </p>
                        </div>
                        <div className="sd-features-right">
                            <div className="sd-img-wrapper">
                                <img src={img_6} alt="Solar Installation Progress" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InstallationService;
