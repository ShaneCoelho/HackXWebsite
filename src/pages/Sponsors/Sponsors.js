// const Sponsors = () => {
//   return (
//     <div>
//       <section id="sponsors">
//         <h2 class="section-title">
//           Hack<span style={{ color: "orange" }}>X</span> Sponsors
//         </h2>
//         <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
//           <div class="sponsors-container">
//             <img class="" src="./devfolio.png" alt="" />
//           </div>
//           <div class="sponsors-container">
//             <img
//               class="h-auto max-w-full rounded-lg"
//               src="./polygon.png"
//               alt=""
//             />
//           </div>
//           <div class="sponsors-container">
//             <img
//               class="h-auto max-w-full rounded-lg"
//               src="./filecoin.png"
//               alt=""
//             />
//           </div>
//           <div class="sponsors-container">
//             <img
//               class="h-auto max-w-full rounded-lg"
//               src="./solana.png"
//               alt=""
//             />
//           </div>
//           <div class="sponsors-container replit">
//             <img class="h-auto max-w-full rounded-lg" src="replit.png" alt="" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Sponsors;

import devfolioTitle from "../../assets/Sponsors/devfolio.png";
import filecoin from "../../assets/Sponsors/filecoin.png";
import polygon from "../../assets/Sponsors/polygon.png";
import replit from "../../assets/Sponsors/replit.png";
import solana from "../../assets/Sponsors/solana.png";

import React from "react";
import "./Sponsors.css"; // Import your custom CSS file

const Sponsors = () => {
  return (
    <div>
      <section>
        <h2 id="sponsors" className="section-title">
          Hack<span className="orange-text">X</span> Sponsors
        </h2>
        <div className="sponsors-grid">
          <div className="sponsors-container">
            <img className="sponsors-img" src={devfolioTitle} alt="" />
          </div>
          <div className="sponsors-container">
            <img className="sponsors-img rounded" src={polygon} alt="" />
          </div>
          <div className="sponsors-container">
            <img className="sponsors-img rounded" src={filecoin} alt="" />
          </div>
          <div className="sponsors-container">
            <img className="sponsors-img rounded" src={solana} alt="" />
          </div>
          <div className="sponsors-container">
            <img className="sponsors-img rounded" src={replit} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
