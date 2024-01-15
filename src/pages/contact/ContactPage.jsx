import "./ContactPage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase";

export default function ContactPage() {
    return(
        <LayoutBase>
            <div id="contactpage">
                <div id="contact-form">
                    <h3>Contact me</h3>
                    <form id="contact-form" action="https://formsubmit.co/stkvinnesland@gmail.com" method="POST">
                        <h4>Name:</h4>
                        <input className="contact-input-field" id="contact-name" type="text" name="name" min="2" required /> 
                        <h4>Email:</h4>
                        <input className="contact-input-field" id="contact-email" type="email" name="email" min="2" required />
                        <h4>Message:</h4>
                        <input className="contact-input-field" id="contact-text" type="text" name="message" min="2" required />
                        <button id="contact-button" type="submit">Send</button>
                        <input type="hidden" name="_next" value="https://portfolio-5np.pages.dev/thank-you"></input>
                    </form>
                </div>
            </div>
        </LayoutBase>
    )
};