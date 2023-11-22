// import React from 'react'


// function Logo({width = '100px'}) {
//   return (
//     <div> Anuj </div>
//   )
// }

// export default Logo


import React from 'react';
import logoImage from '../assets/Pub/logo.svg'; // Import the image

function Logo({ width = '100px' }) {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width }} /> {/* Render the image */}
      {/* <div>Anuj</div> */}
    </div>
  );
}

export default Logo;

