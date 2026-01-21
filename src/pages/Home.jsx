import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import {
  Check,
  Sun,
  Home as HomeIcon,
  Lightbulb,
  ShieldCheck,
  Building2,
  LayoutGrid,
  Settings
} from 'lucide-react';
import '../styles/home.css';

// Import images
import Img1 from '../../assets/FirstPage/Img1.png';
import img2 from '../../assets/FirstPage/img2.png';
import img3 from '../../assets/FirstPage/img3.png';
import img4 from '../../assets/FirstPage/img4.png';
import WhyChooseEnergyBusiness from '../../assets/FirstPage/WhyChooseEnergyBusiness.png';
import md_image from '../../assets/FirstPage/md_image.png';
import hrifysmalllogo from '../../assets/FirstPage/hrifysmalllogo.jpg';

const Home = () => {
  return (
    <main>
      <Hero />

      {/* About Section */}
      <section className="about-intro">
        <div className="container">
          <p className="about-text-bold"> <br /> <br />
            Hrify Energy Business is a trusted solar energy solutions provider, committed to
            delivering high-quality, cost-effective, and eco-friendly solar power systems.
            We help homes and businesses reduce electricity costs while contributing to a
            cleaner and greener future through advanced solar technology.
          </p>
          <br />
          <div className="cta-wrapper">
            <Link to="/contact" className="btn btn-consultation">Get a Free Solar Consultation</Link>
          </div>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card cyan-card">
              <div className="stat-icon-wrapper">
                <HomeIcon className="stat-icon" size={24} />
              </div>
              <div className="stat-info">
                <h3>500+</h3>
                <p>Happy Homes</p>
              </div>
            </div>
            <div className="stat-card cyan-card">
              <div className="stat-icon-wrapper">
                <Lightbulb className="stat-icon" size={24} />
              </div>
              <div className="stat-info">
                <h3>95% less</h3>
                <p>Electricity bills</p>
              </div>
            </div>
            <div className="stat-card cyan-card">
              <div className="stat-icon-wrapper">
                <ShieldCheck className="stat-icon" size={24} />
              </div>
              <div className="stat-info">
                <h3>25+ yrs</h3>
                <p>Panel Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="service-list">
            <div className="service-card">
              <div className="service-header">
                <Sun size={18} /> <span>Residential Solar Systems</span>
              </div>
              <div className="service-body">
                <p className="service-highlight">Custom solar solutions designed to power your home efficiently, reduce monthly electricity bills, and increase long-term savings.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <Building2 size={18} /> <span>Commercial & Industrial Solar</span>
              </div>
              <div className="service-body">
                <p className="service-highlight">High-capacity solar installations for offices, factories, and commercial spaces to improve energy efficiency and sustainability.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <LayoutGrid size={18} /> <span>Solar Rooftop Solutions</span>
              </div>
              <div className="service-body">
                <p className="service-highlight">Space-optimized rooftop solar systems with maximum energy output and long-term reliability.</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <Settings size={18} /> <span>Solar Installation & Maintenance</span>
              </div>
              <div className="service-body">
                <p className="service-highlight">End-to-end services including site inspection, system design, installation, and ongoing maintenance support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-row">
            <div className="gallery-image-box"><img src={Img1} alt="Solar Panel 1" /></div>
            <div className="gallery-image-box"><img src={img2} alt="Solar Panel 2" /></div>
            <div className="gallery-image-box"><img src={img3} alt="Solar Panel 3" /></div>
            <div className="gallery-image-box"><img src={img4} alt="Solar Panel 4" /></div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-flex">
            <div className="why-choose-text">
              <h2>Why Choose Hrify Energy Business?</h2>
              <ul className="why-choose-bullet">
                <li><Check size={16} /> High-quality solar panels & inverters</li>
                <li><Check size={16} /> Experienced solar experts & technicians</li>
                <li><Check size={16} /> Cost-effective and customized solutions</li>
                <li><Check size={16} /> On-time installation & reliable service</li>
                <li><Check size={16} /> Eco-friendly & government-approved systems</li>
              </ul>
            </div>
            <div className="why-choose-visual">
              <img src={WhyChooseEnergyBusiness} alt="Why Choose Us Graphic" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="md-section">
        <div className="container">
          <div className="md-grid">
            <div className="md-profile">
              <div className="md-image-container">
                <img src={md_image} alt="Managing Director" className="md-image" />
              </div>
              <div className="md-details">
                <p className="md-name">J.Jayakrishnan M.E., MBA.</p>
                <p className="md-title">Managing Director</p>
                <img src={hrifysmalllogo} alt="Hrify Logo" className="md-hrify-logo" />
              </div>
            </div>
            <div className="md-vision-mission">
              <div className="vm-item">
                <h3 className="vm-heading">VISION</h3>
                <p>To become a leading solar energy company by empowering communities and businesses with innovative and reliable solar power solutions.</p>
              </div>
              <div className="vm-item">
                <h3 className="vm-heading">MISSION</h3>
                <p>To make clean and renewable solar energy accessible and affordable for everyone, while promoting sustainable living and energy independence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
