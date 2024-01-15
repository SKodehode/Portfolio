import "./ContactPage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase";

export default function ContactPage() {
    return(
        <LayoutBase>
            <div id="contactpage">
                    <div id="contact-page-content">
                        <form id="contact-form" action="https://formsubmit.co/stkvinnesland@gmail.com" method="POST">
                            <h3 id="Contact-page-title">Get in touch!</h3>
                            <div className="form-group-name-email">
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
                                {/* <input className="contact-input-field" id="contact-text" type="text" name="message" min="2" required /> */}
                                <textarea className="contact-input-field" id="contact-text" type="text" name="message" rows="15" cols="50" required="required" min="2" maxLength="2000"></textarea>
                            </div>
                            <div className="form-group" id="form-group-buttons">
                                <button id="contact-button" type="submit">Submit</button>
                            </div>
                            <input type="hidden" name="_next" value="https://portfolio-5np.pages.dev/thank-you"></input>
                        </form>
                    </div>
            </div>
        </LayoutBase>
    )
};