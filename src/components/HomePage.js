import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <div className="background-image">
                <div className="content">
                    <h1>Welcome to Our Logistics Company</h1>
                    <p>
                        We provide reliable logistics services to meet your shipping needs.
                        Our experienced team ensures that your goods are handled with care
                        and delivered on time.
                    </p>

                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Fast and Secure Shipping</li>
                        <li>Global Reach</li>
                        <li>Competitive Pricing</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                </div>
            </div>
            <div className='home-content2'>
                <div className='content2'>
                    <h2>Technology We Use</h2>
                    <h3>The shipping industry has undergone a transformative evolution thanks to cutting-edge technology.</h3>
                    <ul>
                        <li>GPS tracking</li>
                        <li>optimized route planning and fuel consumption.</li>
                        <li>Internet of Things (IoT) devices, including sensors and RFID trackingResult</li>
                        <li>Blockchain technology for recording transactions and verifying the authenticity of goods. </li>
                        <li>Furthermore, artificial intelligence (AI) and machine learning algorithms are being employed to predict maintenance.</li>
                    </ul>
                </div>
                <div className='logistics-tech'></div>
            </div>
            <div className='home-content3'>
                <h1>Why Choose Us?</h1>
            </div>
            <div className='home-content4'>
                <div className='home-content4-sub1'>
                    <h3>Efficiency and Optimization</h3>
                    <ul>
                        <li>Route Planning using advanced route optimization algorithm and software to find the most efficietn routes for transporting goods, reducing fuel consumption and minimizing travel time.</li>
                        <li>Inventory Management utilizing just-in-time inventory management strategies to minimize storage costs while ensuring that products are available when needed, reducing holding costs.</li>
                        <li>Load Optimization  to maximize the use of available space in trucks, containers, and warehouses, reducing the number of trips and transportation costs.</li>
                        <li>Warehouse Automation such as robotics and conveyor systems, are used to streamline warehouse operations, improve order picking accuracy, and reduce handling time.</li>
                    </ul>
                </div>
                <div className='home-content4-sub2'>
                    <h3>Global Reach and Network</h3>
                    <ul>
                        <li>International Partnerships partnerships with international carriers, customs agencies, and local logistics providers to navigate complex international shipping regulations and customs processes.</li>
                        <li>Distribution Centers strategically located near major transportation hubs to facilitate the efficient movement and storage of goods.</li>
                        <li>Multimodal Transportation Utilizing a variety of transportation modes, such as sea, air, road, and rail</li>
                        <li>Cross-Border Expertise in managing cross-border shipments, including customs documentation, tariffs, duties, and compliance with international trade regulations.</li>
                    </ul>
                </div>
                <div className='home-content4-sub3'>
                    <h3>Reliability and Tracking</h3>
                    <p>A hallmark of logistics companies is their commitment to reliability and the ability to provide real-time tracking and visibility into the movement of goods. </p>
                    <ul>
                        <li>Real-Time Tracking</li>
                        <li>Predictive Analytics</li>
                        <li>Customer Support</li>
                        <li>Safety and Security</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
