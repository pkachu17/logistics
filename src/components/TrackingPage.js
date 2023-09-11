import React, { useState } from 'react';
import './TrackingPage.css';

function TrackingPage() {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  // Dummy tracking data (replace with actual data from your API)
  const dummyTrackingData = {
    trackingCode: 'ABC123',
    status: 'In Transit',
    location: 'City, Country',
    estimatedDelivery: '2023-09-30',
  };

  const handleTrack = () => {
    // In a real application, make an API request to get tracking data.
    // For this example, we'll use the dummy data.
    setTrackingResult(dummyTrackingData);
  };

  return (
    <div className="tracking-page">
      <h2>Track Your Shipment</h2>
      <input
        type="text"
        placeholder="Enter Tracking Code"
        value={trackingCode}
        onChange={(e) => setTrackingCode(e.target.value)}
      />
      <button onClick={handleTrack}>Track</button>
      {trackingResult && (
        <div className="tracking-result">
          <p>Tracking Code: {trackingResult.trackingCode}</p>
          <p>Status: {trackingResult.status}</p>
          <p>Location: {trackingResult.location}</p>
          <p>Estimated Delivery: {trackingResult.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
}

export default TrackingPage;
