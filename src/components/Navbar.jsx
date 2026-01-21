import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import './Navbar.css';

// Import images
import Navbar_logo from '../../assets/FirstPage/Navbar_logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={Navbar_logo} alt="Hrify Energy Logo" className="logo" />
          </Link>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-link dropdown-trigger">
              Services <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/free-home-visit" className="dropdown-link">Free Home Visit</Link></li>
                <li><Link to="/personalized-quote" className="dropdown-link">Personalised Quote</Link></li>
                <li><Link to="/govt-paperwork" className="dropdown-link">Govt PaperWork & Subsidy Assistance</Link></li>
                <li><Link to="/installation-service" className="dropdown-link">High Quality installations in 24 hrs</Link></li>
                <li><Link to="/grid-connection" className="dropdown-link">Connection to the Grid</Link></li>
                <li><Link to="/redeem-subsidy" className="dropdown-link">Redeem your Subsidy</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/calculator" className="nav-link">Solar Calculator</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
