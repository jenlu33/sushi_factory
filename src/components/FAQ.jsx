import React from 'react';

function FAQ() {
    return (
        <div className="container-v1">
            <div className="background-div"></div>

            <div className="title-container">
                <h1 className="title-v1">Frequently Asked Questions</h1>
            </div>
            <div className="info-box">
                <button class="accordion">How do I order online?</button>
                <div class="panel">
                    <p>Although we do not take orders directly online, we are available on DoorDash...</p>
                </div>

                <button class="accordion">Do you guys offer any milk alternatives?</button>
                <div class="panel">
                    <p>Yes! We now provide almond milk</p>
                </div>

                <button class="accordion">Where are you located in the mall?</button>
                <div class="panel">
                    <p>We are located on the left side of the mall right next to the Student Call Center and Math Empo</p>
                </div>
            </div>
        </div>

    )
};

export default FAQ;