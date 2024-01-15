import Buttons from "../../components/buttons/Buttons"
import LayoutBase from "../../components/layout/LayoutBase"
import "./AppreciationPage.css"

export default function AppreciationPage() {
    return(
        <LayoutBase>
            <div id="appreciation-page">
                <h3>Thank you!</h3>
                <h2>Your message has been submited and I will get back to you shortly!</h2>
                <Buttons to="/contact" text="Take me back" id="take-me-back" className="page-link"/>
            </div>
        </LayoutBase>
    )
}