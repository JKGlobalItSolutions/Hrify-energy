import { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bill: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you soon.');
  };

  return (
    <main className="contact-main">
      <div className="container contact-container">
        <div className="contact-header">
          <h1>Book a Free Home Visit today!</h1>
          <p>Schedule a FREE solar consultation at home!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-box">
            <p className="form-tagline">We're here to help - Reach out anytime</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="bill"
                  placeholder="What is your Bi-Monthly Electricity Bill?"
                  value={formData.bill}
                  onChange={handleChange}
                />
              </div>

              <div className="form-submit-container">
                <button type="submit" className="btn-submit">Submit</button>
              </div>

              <div className="form-agreement">
                <input
                  type="checkbox"
                  id="agreed"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreed">I agree to the Terms and Condition</label>
              </div>
            </form>
          </div>

          <div className="contact-image-box">
            <img src="/assets/SecondPage/img_3.png" alt="Solar Technicians" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
