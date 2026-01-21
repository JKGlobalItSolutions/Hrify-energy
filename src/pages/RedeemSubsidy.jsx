import '../styles/serviceDetail.css';
import Banner_8 from '../../assets/Banner_8.png';
import img_8 from '../../assets/img_8.png';

const RedeemSubsidy = () => {
    return (
        <main className="sd-main">
            {/* Hero Section */}
            <section className="sd-hero">
                <div className="sd-hero-container">
                    <img src={Banner_8} alt="Redeem your Subsidy Hero" className="sd-hero-img" />
                </div>
            </section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <h1 className="sd-title">Redeem your Subsidy</h1>
                </div>
                <div className="sd-blue-banner">
                    <p>Maximum Savings. Minimum Effort</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="sd-description">
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Take advantage of government-supported solar subsidy programs and reduce your installation cost
                            significantly. Hrify Energy Business guides you through the entire subsidy process, ensuring a smooth,
                            transparent, and hassle-free experience from application to approval.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="sd-content-section">
                <div className="container">
                    <div className="sd-grid">
                        <div className="sd-text-content">
                            <h3>Benefits of Redeeming Your Subsidy</h3>
                            <br />
                            <p>• Lower upfront installation cost</p>
                            <p>• Faster return on investment</p>
                            <p>• Increased affordability of solar adoption</p>
                            <p>• Government-approved and compliant systems</p>
                        </div>
                        <div className="sd-features-right">
                            <div className="sd-img-wrapper">
                                <img src={img_8} alt="Subsidy Benefits Illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default RedeemSubsidy;
