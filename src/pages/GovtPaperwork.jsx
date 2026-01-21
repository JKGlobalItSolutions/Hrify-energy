import '../styles/serviceDetail.css';
import Banner_5 from '../../assets/Banner_5.png';
import img_5 from '../../assets/img_5.png';

const GovtPaperwork = () => {
    return (
        <main className="sd-main">
            {/* Hero Section */}
            <section className="sd-hero">
                <div className="sd-hero-container">
                    <img src={Banner_5} alt="Govt Paperwork Hero" className="sd-hero-img" />
                </div>
            </section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <h1 className="sd-title">Govt Paperwork & Subsidy Assistance</h1>
                </div>
                <div className="sd-blue-banner">
                    <p>Paperwork Managed. Solar Simplified.</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="sd-description">
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Our team manages the complete documentation process and works closely with the local EB
                            office to ensure timely approvals, clear communication, and uninterrupted progress throughout
                            your solar installation journey.
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
                                Our team manages the complete documentation
                                process and works closely with the local EB office
                                to ensure timely approvals, clear communication,
                                and uninterrupted progress throughout your solar
                                installation journey.
                            </p>
                        </div>
                        <div className="sd-features-right">
                            <div className="sd-img-wrapper">
                                <img src={img_5} alt="Subsidy Assistance" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GovtPaperwork;
