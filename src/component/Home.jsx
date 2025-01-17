import React from 'react'



function Home() {
  
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src="https://t4.ftcdn.net/jpg/03/05/77/55/240_F_305775533_zsJZnX0m5fyXs6G0nSlDJIUgaPUWmMmb.jpg"
        alt="Sample"
        className="img-fluid"
        style={{ width: '100%', height: '620px' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          
          //fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        }}
      ><h1 style={{
        fontSize:'2.5rem',lineheight:'1',fondweight:'600px'
        
      }}>
        Explore the World, One Journey at a Time
      </h1>
      <p>
  Welcome to Yoliday, your gateway to unforgettable adventures. Whether you're dreaming of sun-soaked beaches, snow-capped mountains, or bustling city escapes, we've got you covered.
</p>

        
        
      </div>
    </div>
  )
  
}

export default Home;