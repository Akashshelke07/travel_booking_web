import React from 'react';

function Destination() {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#f4f4f9",
    },
    card: {
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    img: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
      transition: "transform 0.3s ease",
    },
    body: {
      padding: "15px",
      textAlign: "center",
    },
    title: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#333",
    },
    list: {
      display: "flex",
      justifyContent: "center",
      padding: "0",
      margin: "0",
      listStyle: "none",
      gap: "15px",
    },
    listItem: {
      fontSize: "16px",
      color: "#555",
      fontWeight: "500",
    },
  };

  const destinations = [
    {
      img: "https://static.toiimg.com/photo/63282406.cms",
      title: "Taj Mahal",
      details: ["₹5000", "1 day", "Agra"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186647/top-10-tourist-attractions-in-india-harmandir-sahib/top-10-tourist-attractions-in-india-harmandir-sahib-1120x732.jpg",
      title: "Harmandir Sahib",
      details: ["₹1500", "1 day", "Amritsar"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186675/top-10-tourist-attractions-in-indiaa-gateway-of-india/top-10-tourist-attractions-in-indiaa-gateway-of-india-1120x732.jpg",
      title: "Gateway of India",
      details: ["₹1200", "1 day", "Mumbai"],
    },
    {
      img: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1661186654/top-10-tourist-attractions-in-india-manikarnika-ghat/top-10-tourist-attractions-in-india-manikarnika-ghat-1120x732.jpg",
      title: "Manikarnika Ghat",
      details: ["₹800", "1 day", "Varanasi"],
    },
    {
      img: "https://static.investindia.gov.in/s3fs-public/2023-06/1.jpg",
      title: "Unveiling India",
      details: ["₹5000", "1 day", "India"],
    },
    {
      img: "https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640",
      title: "Eiffel Tower",
      details: ["₹15000", "1 day", "Paris"],
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d6/a1/6b/buckingham-palace.jpg?w=800&h=500&s=1",
      title: "Buckingham Palace",
      details: ["₹12000", "1 day", "London"],
    },
    {
      img: "https://static.independent.co.uk/2024/08/30/14/newFile-1.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp",
      title: "Sacré-Cœur",
      details: ["₹8000", "1 day", "Paris"],
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/49/Sydney_Opera_House_-_Jan_2006.jpg",
      title: "Sydney Opera House",
      details: ["₹15000", "1 day", "Sydney"],
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Colosseum_in_Rome_-_Italy.jpg",
      title: "Colosseum",
      details: ["₹5000", "1 day", "Rome"],
    },
  ];

  return (
    <div style={styles.container}>
      {destinations.map((destination, index) => (
        <div
          key={index}
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={destination.img} style={styles.img} alt={destination.title} />
          <div style={styles.body}>
            <h4 style={styles.title}>{destination.title}</h4>
            <ul style={styles.list}>
              {destination.details.map((detail, i) => (
                <li key={i} style={styles.listItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Destination;
