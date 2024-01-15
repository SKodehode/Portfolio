import "./ContactPage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase";

export default function ContactPage() {
    return(
        <LayoutBase>
            <div id="contactpage">
                <div id="contact-page-content">
                    <h3 id="contact-page-title">Get in touch!</h3>
                    <div className="contact-form-wrapper">
                        <form id="contact-form" action="https://formsubmit.co/stkvinnesland@gmail.com" method="POST">
                            <div className="form-group-wrapper">
                                <div className="form-group" id="form-group-name">
                                    <label for="contact-name" className="form-title">Name:</label>
                                    <input className="contact-input-field" id="contact-name" type="text" name="name" min="2" required maxLength="50"/>
                                </div>
                                <div className="form-group" id="form-group-email">
                                    <label for="contact-email" className="form-title">Email:</label>
                                    <input className="contact-input-field" id="contact-email" type="email" name="email" min="2" required maxLength="100"/>
                                </div>
                            </div>
                            <div className="form-group" id="form-group-message">
                                <label for="contact-text" className="form-title">Message:</label>
                                <textarea className="contact-input-field" id="contact-text" type="text" name="message" rows="15" cols="50" required="required" min="2" maxLength="2000"></textarea>
                            </div>
                            <div className="form-group" id="form-group-buttons">
                                <button id="contact-button" type="submit">Submit</button>
                            </div>
                            <input type="hidden" name="_next" value="https://portfolio-5np.pages.dev/thank-you"></input>
                        </form>
                        <div className="contact-info">
                            <h4>Feel free to contact me any time!</h4>
                            <h3>Contact Information</h3>
                            <p>+1 123 456 789</p>
                            <p>example@examplemail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutBase>
    )
};