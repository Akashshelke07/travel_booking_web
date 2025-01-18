import React, { useState } from 'react';

function Booking() {
  const [fullname, setfullname] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [destination, setdestination] = useState('');
  const [charges, setCharges] = useState('');
  const [days, setDays] = useState(1); // Default to 1 day
  const [customCharges, setCustomCharges] = useState(false);

  const destinations = [
    { title: 'Taj Mahal', price: 5000 },
    { title: 'Harmandir Sahib', price: 1500 },
    { title: 'Gateway of India', price: 1200 },
    { title: 'Manikarnika Ghat', price: 800 },
    { title: 'Unveiling India', price: 5000 },
    { title: 'Eiffel Tower', price: 15000 },
    { title: 'Buckingham Palace', price: 12000 },
    { title: 'Sacré-Cœur', price: 8000 },
    { title: 'Sydney Opera House', price: 15000 },
    { title: 'Colosseum', price: 5000 },
  ];

  const sendDate = (e) => {
    e.preventDefault();
    const totalCost = customCharges ? charges * days : destination.price * days; // Calculate total cost based on destination or custom charges
    console.log(fullname, contact, email, destination, charges, days, totalCost);
  };

  return (
    <center>
      <div>
        <form
          onSubmit={sendDate}
          style={{
            margin: '3rem auto',
            padding: '2rem',
            width: '40%',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            color: '#333',
          }}
        >
          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={(e) => setfullname(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Contact No:
          </label>
          <input
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setemail(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Select Destination:
          </label>
          <select
            onChange={(e) => {
              const selectedDestination = destinations.find(
                (dest) => dest.title === e.target.value
              );
              setdestination(selectedDestination || {});
            }}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            <option value="">Select a destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest.title}>
                {dest.title} - ₹{dest.price}
              </option>
            ))}
          </select>

          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Charges (Per Day):
          </label>
          <input
            type="number"
            disabled={destination.title}
            value={customCharges ? charges : destination.price}
            onChange={(e) => setCharges(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <label
            style={{
              display: 'block',
              textAlign: 'left',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Number of Days:
          </label>
          <input
            type="number"
            value={days}
            min="1"
            onChange={(e) => setDays(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '0.2rem',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />

          <label style={{ display: 'block', marginTop: '10px' }}>
            <input
              type="checkbox"
              onChange={(e) => setCustomCharges(e.target.checked)}
              style={{ marginRight: '10px' }}
            />
            Set Custom Pricing
          </label>

          <input
            type="submit"
            value="Book"
            style={{
              display: 'block',
              textAlign: 'left',
              width: '100%',
              padding: '1rem',
              marginTop: '1rem',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
          />
        </form>
      </div>
    </center>
  );
}

export default Booking;
