import React from 'react'
function Destination() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
    },
    card: {
      width: "18rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      backgroundColor: "#fff",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    body: {
      padding: "15px",
      textAlign: "left",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    list: {
      display:'flex',
     justifyContent:'space-around',
     textAlign:'center',
     paddingleft:'1px',
      padding: '0',
      margin: '0',
    },
    listItem: {
      fontSize: "16px",
      marginleft:"5px",
      marginBottom: "5px",
      color: "#555",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="https://static.toiimg.com/photo/63282406.cms"
            style={styles.img}
            alt="Taj Mahal"
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Taj Mahal</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Aagra</li>
            </ul>
          </div>
        </div>
        <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661186647/top-10-tourist-attractions-in-india-harmandir-sahib/top-10-tourist-attractions-in-india-harmandir-sahib-1120x732.jpg"
            style={styles.img}
            alt="Harmandir Sahib"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Harmandir Sahib</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Amritsar</li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661186675/top-10-tourist-attractions-in-indiaa-gateway-of-india/top-10-tourist-attractions-in-indiaa-gateway-of-india-1120x732.jpg" 
            style={styles.img}
            alt="Gateway of India"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Gateway of India</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Mumbai</li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661186654/top-10-tourist-attractions-in-india-manikarnika-ghat/top-10-tourist-attractions-in-india-manikarnika-ghat-1120x732.jpg" 
            style={styles.img}
            alt="Manikarnika Ghat"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Manikarnika Ghat</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Manikarnika </li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://static.investindia.gov.in/s3fs-public/2023-06/1.jpg" 
            style={styles.img}
            alt="Unveiling India"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Unveiling India</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>India</li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://www.usnews.com/object/image/00000163-8d5b-d398-ad7f-8dfff5760000/3-eiffel-tower-getty.jpg?update-time=1527086483519&size=responsive640" 
            style={styles.img}
            alt="Eiffel Tower"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Eiffel Tower</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Paris</li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d6/a1/6b/buckingham-palace.jpg?w=800&h=500&s=1" 
            style={styles.img}
            alt="Buckingham Palace"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Buckingham Palace</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>london </li>
            </ul>
          </div>
          </div>
          <div
          className="card"
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src="https://static.independent.co.uk/2024/08/30/14/newFile-1.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp" 
            style={styles.img}
            alt="Sacré-Cœur"
            
          />
          <div style={styles.body}>
            <h4 style={styles.title}>Sacré-Cœur</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>&#8377;2000</li>
              <li style={styles.listItem}>1 day</li>
              <li style={styles.listItem}>Paris</li>
          </ul>
          </div>
          </div>
          
        
        
      </div>
    </>
  );
}

export default Destination;
    