import React from 'react';
import './ServicesPage.css';
import service1Image from '../images/service1.jpeg';
import service2Image from '../images/service2.webp';

function ServicesPage() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="service">
        <div className="service-details">
          <h3>Service 1: Shipping from Cargo Ships</h3>
          <p>
          Our premier logistics service, 'Shipping from Cargo Ships,' 
          is designed to meet the demands of global trade. We specialize in 
          efficiently and securely transporting goods across vast oceans and seas, 
          utilizing state-of-the-art cargo ships. With a commitment to reliability 
          and safety, our experienced team ensures that your cargo is expertly managed 
          from the point of origin to its final destination. We understand the unique 
          challenges of maritime logistics and have developed a comprehensive solution 
          to navigate these waters. Whether you're moving large volumes of goods or require 
          specialized shipping services, our 'Shipping from Cargo Ships' service offers the 
          assurance of timely deliveries and the peace of mind that comes with entrusting 
          your shipments to a trusted leader in the industry
          </p>
        </div>
        <img src={service1Image} alt="Service 1" />
      </div>
      <div className="service">
        <div className="service-details">
          <h3>Service 2: Shipping via Air Freight</h3>
          <p>
          Our 'Shipping via Air Freight' service is your ticket to rapid and efficient global logistics. 
          When time is of the essence and you require swift delivery, we have you covered. With our extensive 
          network of airline partnerships and a commitment to speed and reliability, we ensure that your 
          cargo takes to the skies and reaches its destination in record time. Whether it's perishable goods, 
          high-value items, or urgent shipments, our team of experts orchestrates the logistics seamlessly, 
          from departure to arrival. When you choose 'Shipping via Air Freight,' you're choosing the fastest 
          and most dependable route to transport your goods across the globe. We understand the importance of 
          timely deliveries, and our service guarantees that your cargo reaches its final destination with the utmost efficiency.
          </p>
        </div>
        <img src={service2Image} alt="Service 2" />
      </div>
      {/* Add more services */}
    </div>
  );
}

export default ServicesPage;
