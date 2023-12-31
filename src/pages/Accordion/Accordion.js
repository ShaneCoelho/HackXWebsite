import React, { useEffect } from 'react'
import './Accordion.css'


function Accordion() {
    // useEffect(() => {
      
    //     window.addEventListener('DOMContentLoaded', function() {
    //         console.log('DOM loaded with JavaScript');
    //         var inputs = document.querySelectorAll('input');
    //         var checked = Array.from(inputs).find(input => input.checked)?.value;
        
    //         inputs.forEach(function(input) {
    //             input.addEventListener('click', function() {
    //                 if (this.value === checked) {
    //                     this.checked = false;
    //                     checked = '';
    //                 } else {
    //                     this.checked = true;
    //                     checked = this.value;
    //                 }
    //             });
    //         });
    //     });
    
    // }, [])
    
    const inptchng = () =>{
        console.log('DOM loaded with JavaScript');
        var inputs = document.querySelectorAll('input');
        var checked = Array.from(inputs).find(input => input.checked)?.value;
    
        inputs.forEach(function(input) {
            input.addEventListener('click', function() {
                if (this.value === checked) {
                    this.checked = false;
                    checked = '';
                } else {
                    this.checked = true;
                    checked = this.value;
                }
            });
        });
    }

  return (
    <section class="accordion-container">
    <div class="acc-container">
        <h1 class="header-text">FAQ </h1>
        <div class="acc-tab">
            <input type="radio" onChange={inptchng} name="acc" id="acc1" value="1" />
            <label for="acc1">
                <h2 class="num">01</h2>
                <h3 class="txt">What are the hackathon tracks?</h3>
            </label>
            <div class="tab-content"> <p>There are four tracks: Web/App, AI/ML, Blockchain, and Open Innovation.
            </p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" onChange={inptchng} name="acc" id="acc2" value="2" />
            <label for="acc2">
                <h2 class="num">02</h2>
                <h3 class="txt">How will participants be selected?</h3>
            </label>
            <div class="tab-content"><p>Participants will be selected based on their resumes and past projects.</p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" onChange={inptchng} name="acc" id="acc3" value="3" />
            <label for="acc3">
                <h2 class="num">03</h2>
                <h3 class="txt">Is there any registration fees?</h3>
            </label>
            <div class="tab-content"> 
            <p>
            No, there is absolutely no registration fee. Participation is free of charge.
            </p>
        </div>
    </div>
    <div class="acc-tab">
            <input type="radio" onChange={inptchng} name="acc" id="acc4" value="4"/>
            <label for="acc4">
                <h2 class="num">04</h2>
                <h3 class="txt">What expenses do I need to cover?</h3>
            </label>
            <div class="tab-content"> 
            <p>
            You only need to cover your travel expenses. Your accommodation and meals/snacks during the 24 hours will be taken care of by the team.
            </p>
        </div>
    </div> <div class="acc-tab">
            <input type="radio" onChange={inptchng} name="acc" id="acc5" value="5" />
            <label for="acc5">
                <h2 class="num">05</h2>
                <h3 class="txt">Are there any benefits if my team doesn't win?</h3>
            </label>
            <div class="tab-content"> 
            <p>
            Absolutely, we've got you covered. Top performers will have the chance for direct internship interviews with national and international firms.
            </p>
        </div>
    </div>
</div>
</section>
  )
}

export default Accordion