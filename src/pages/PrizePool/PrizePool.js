/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './PrizePool.css'
import winner from '../../assets/prizepool/winner.png'
import polygon from '../../assets/prizepool/polygon.png'
import filecoin from '../../assets/prizepool/Filecoin.png'
import solana from '../../assets/prizepool/Solana.png'
import replit from '../../assets/prizepool/replit.png'

function PrizePool() {
  return (
    <section class="prizepool container">
    <h1  class="header-text">
        PrizePool
    </h1>
    <h2  class="header-text1">
    Upto<span class="orange"> ₹ 1,85,000</span>
    </h2>
    <h2  class="header-text1">
    <br></br>
    Hack<span class="orange">X</span> Organizers
    </h2> 

<div class="wrapper">
  <div class="card">
    <div class="front1">
      <h1>1st</h1>
      <h1>Runner Up</h1>
      <p class="price">$ 240</p>
      <div class="img-wrapper">
        <img class="prize" src={winner} alt="Floating Image 1" />  
      </div>
    </div>
  </div>
  <div class="card center-card">
    <div class="front2">
      <h1>Winner</h1>
      <p class="price">$ 360</p>
      <div class="img-wrapper">
      <img class="prize" src={winner} alt="Floating Image 2" />  
      </div>
    </div>
  </div>
  <div class="card">
    <div class="front3">
      <h1>2nd</h1>
      <h1>Runner Up</h1>
      <p class="price">$ 120</p>
      <div class="img-wrapper">
      <img class="prize" src={winner} alt="Floating Image 3" />  
      </div>
    </div>
  </div>
  
</div>
<br></br><br></br>
<h1  class="header-text2">
Partners
    </h1><br></br>
  <div class="spn-container">
        <div class="gradient-cards">
          <div class="spn-card">
            <div class="container-card bg-purple-box">
                <div class="sponsors">
                    <img src={polygon} class="spn" alt="" />
                </div>
              <p class="card-title">Polygon</p>
              <p class="card-description orange">$ 350</p>
              <hr class="line"></hr>
              <p class="card-description1">Best hack built on Ethereum : </p>
              <p class="card-description orange">$ 150</p>
              <p class="card-description1">Best hack built on Ethereum +  Polygon : </p> 
              <p class="card-description orange">$ 200</p>
            </div>
          </div>
          <div class="spn-card">
            <div class="container-card bg-violet-box">
                <div class="sponsors">
                <img src={solana} class="spn" alt="" />
                </div>
              <p class="card-title">Solana</p>
              <p class="card-description orange">$ 850</p>
              <hr class="line"></hr>
              <p class="card-description1">young gun :</p>
              <p class="card-description orange">$ 100</p>
              <p class="card-description1">master glasseater :</p> 
              <p class="card-description orange">$ 250</p>
              <p class="card-description1">rising teknoking : </p> 
              <p class="card-description orange">$ 250</p>
            </div>
          </div>
          <div class="spn-card">
            <div class="container-card bg-blue-box">
                <div class="sponsors">
                <img src={filecoin} class="spn" alt="" />
                </div>
                <p class="card-title">Filecoin</p>
                <p class="card-description orange">$ 250</p>
              <hr class="line"></hr>
              <p class="card-description1">Best use of Filecoin and/or IPFS : </p>
              <p class="card-description orange">$ 250</p>
            </div>
          </div>
      
          <div class="spn-card">
            <div class="container-card bg-orange-box">
                <div class="sponsors">
                <img src={replit} class="spn" alt="" />
                </div>
            <p class="card-title">Replit</p>
            <p class="card-description orange">$ 50</p>
              <hr class="line"></hr>
              <p class="card-description1">Winning Project deployed on Replit :  </p>
              <p class="card-description orange">$ 50</p>
            </div>
          </div>
      
         
        </div>
      </div>
</section>
  )
}

export default PrizePool