import React from 'react'
import './Accordion.css'


function Accordion() {
  return (
    <section class="accordion-container">
    <div class="acc-container">
        <h1 class="header-text">FAQ </h1>
        <div class="acc-tab">
            <input type="radio" name="acc" id="acc1" />
            <label for="acc1">
                <h2 class="num">01</h2>
                <h3 class="txt">What is HackX?</h3>
            </label>
            <div class="tab-content"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" name="acc" id="acc2" />
            <label for="acc2">
                <h2 class="num">02</h2>
                <h3 class="txt">GG</h3>
            </label>
            <div class="tab-content"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" name="acc" id="acc3" />
            <label for="acc3">
                <h2 class="num">03</h2>
                <h3 class="txt">NHK</h3>
            </label>
            <div class="tab-content"> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" name="acc" id="acc4" />
            <label for="acc4">
                <h2 class="num">04</h2>
                <h3 class="txt">NT</h3>
            </label>
            <div class="tab-content"> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
</div>
</section>
  )
}

export default Accordion