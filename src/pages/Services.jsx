import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import '../styles/services.css';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Select a service');

  const services = [
    'Free Home Visit',
    'Personalised Quote',
    'Govt PaperWork & Subsidy Assistance',
    'High Quality installations in 24 hrs',
    'Connection to the Grid',
    'Redeem your Subsidy'
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectService = (service) => {
    setSelectedService(service);
    setIsOpen(false);
    if (service === 'Free Home Visit') {
      window.location.href = '/free-home-visit';
    } else if (service === 'Personalised Quote') {
      window.location.href = '/personalized-quote';
    } else if (service === 'Govt PaperWork & Subsidy Assistance') {
      window.location.href = '/govt-paperwork';
    } else if (service === 'High Quality installations in 24 hrs') {
      window.location.href = '/installation-service';
    } else if (service === 'Connection to the Grid') {
      window.location.href = '/grid-connection';
    } else if (service === 'Redeem your Subsidy') {
      window.location.href = '/redeem-subsidy';
    }
  };

  return (
    <main className="services-page">
      <div className="container services-container">
        <h1>Our Services</h1>
        <p className="services-subtitle">Experience a seamless transition to solar with our comprehensive end-to-end services.</p>

        <div className="dropdown-wrapper">
          <div
            className={`custom-dropdown ${isOpen ? 'is-open' : ''}`}
            onClick={toggleDropdown}
          >
            <div className="dropdown-header">
              <span className={`selected-text ${selectedService === 'Select a service' ? 'placeholder' : ''}`}>
                {selectedService}
              </span>
              <ChevronDown className={`dropdown-icon ${isOpen ? 'rotate' : ''}`} />
            </div>

            <div className="dropdown-list-container">
              <ul className="dropdown-list">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className={`dropdown-item ${selectedService === service ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      selectService(service);
                    }}
                  >
                    <span className="item-text">{service}</span>
                    {selectedService === service && <Check className="check-icon" size={16} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="services-description">
          <p>
            From the initial <strong>free home visit</strong> to the final <strong>subsidy redemption</strong>,
            Hrify Energy handles everything. We ensure <strong>high-quality installations</strong> within
            24 hours and manage all <strong>government paperwork</strong> so you can enjoy
            clean energy without the hassle.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Services;
