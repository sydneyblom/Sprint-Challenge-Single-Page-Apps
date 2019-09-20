import React from "react";





function WelcomePage(props) {
  const welcomeButton = event => {
    event.preventDefault();
    props.history.push("/characters");
  };
  return (
    <div className="home-wrapper">
     <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      <button onClick={welcomeButton} className="md-button shop-button">
        Characters
      </button>
    </div>
  );
}

export default WelcomePage;





// export default function WelcomePage() {
//   return (
//     <section className="welcome-page">
//       <header>
//         <h1>Welcome to the ultimate fan site!</h1>
//         <img
//           className="main-img"
//           src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//           alt="rick"
//         />
//       </header>
      
//     </section>
//   );
// }

