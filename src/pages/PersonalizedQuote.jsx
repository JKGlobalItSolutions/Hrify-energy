import '../styles/serviceDetail.css';
import Banner_4Up from '../../assets/Banner_4Up.png';
import Banner_4Down from '../../assets/Banner_4Down.png';
import img_4 from '../../assets/img_4.png';

const PersonalizedQuote = () => {
    return (
        <main className="sd-main">
            {/* Hero Section */}
            <section className="sd-hero-stacked">
                <img src={Banner_4Up} alt="Personalized Quote Banner Top" className="sd-full-banner" />
                <img src={Banner_4Down} alt="Personalized Quote Banner Bottom" className="sd-full-banner" />
            </section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <h1 className="sd-title">Personalized Quote</h1>
                </div>
                <div className="sd-blue-banner">
                    <p>Based on your energy requirements, our team will create a custom proposal for you.</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="sd-description">
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Based on your energy requirements, our team will create a customized solar proposal that
                            includes system sizing, cost estimates, projected savings, and installation timelines—ensuring
                            the best solution for your needs.
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
                                Based on your energy requirements, our team will
                                create a custom solar proposal tailored to your
                                property and consumption patterns. The proposal
                                includes system design, estimated costs, savings
                                analysis, and performance projections, giving you
                                a clear understanding of your investment and
                                long-term benefits.
                            </p>
                        </div>
                        <div className="sd-features-right">
                            <div className="sd-img-wrapper">
                                <img src={img_4} alt="Personalized Solar Plan" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PersonalizedQuote;
