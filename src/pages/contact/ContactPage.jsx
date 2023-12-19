import "./ContactPage.css"
import React from 'react'
import LayoutBase from "../../components/layout/LayoutBase";

export default function ContactPage() {
    return(
        <LayoutBase>
            <div id="contactpage">
                <h3>Contact me</h3>
                <form action="https://formsubmit.co/stkvinnesland@gmail.com" method="POST">
                    <input type="text" name="name" min="2" required /> 
                    <input type="email" name="email" min="2" required />
                    <input type="text" name="message" min="2" required />
                    <button type="submit">Send</button>
                </form>
            </div>
        </LayoutBase>
    )
};