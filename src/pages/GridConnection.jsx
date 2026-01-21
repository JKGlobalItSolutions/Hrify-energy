import '../styles/serviceDetail.css';
import Banner_7 from '../../assets/Banner_7.png';
import img_7 from '../../assets/img_7.png';

const GridConnection = () => {
    return (
        <main className="sd-main">
            {/* Hero Section */}
            <section className="sd-hero">
                <div className="sd-hero-container">
                    <img src={Banner_7} alt="Connection to the Grid Hero" className="sd-hero-img" />
                </div>
            </section>

            {/* Header Banner */}
            <section className="sd-header-banner">
                <div className="container">
                    <h1 className="sd-title">Connection to the Grid</h1>
                </div>
                <div className="sd-blue-banner">
                    <p>Your Solar Subsidy, Made Simple</p>
                </div>
            </section>

            {/* Description Section */}
            <section className="sd-description">
                <div className="container">
                    <div className="sd-description-box">
                        <p>
                            Grid connection enables your solar power system to seamlessly integrate with the local electricity
                            network, allowing you to use solar energy efficiently while maintaining uninterrupted power supply.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="sd-content-section">
                <div className="container">
                    <div className="sd-grid">
                        <div className="sd-text-content" style={{ fontSize: '14px' }}>
                            <p><strong>Your rooftop solar system will be installed prNet Metering Advantage:</strong> Earn credits for surplus power supplied to the grid, reducing your electricity bills.</p>
                            <br />
                            <p><strong>Reliable Power Supply:</strong> Enjoy continuous electricity without dependency on batteries.</p>
                            <br />
                            <p><strong>Cost-Effective Solution:</strong> Lower installation and maintenance costs compared to off-grid systems.</p>
                            <br />
                            <p><strong>Optimized Energy Usage:</strong> Smart inverters automatically balance solar and grid power for maximum efficiency.omptly, cleanly, and professionally by trained technicians who follow strict quality and safety standards, ensuring a smooth installation process and long-term energy savings.</p>
                        </div>
                        <div className="sd-features-right">
                            <div className="sd-img-wrapper" style={{ border: 'none' }}>
                                <img src={img_7} alt="Grid Connection Diagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default GridConnection;
