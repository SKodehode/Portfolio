import "./main.css"
import Header from "./header/Header"
import Footer from "./footer/footer"

export default function LayoutBase(properties) {
    return(
        <>
            <Header/>
            <main>
                {properties.children}
            </main>
            <Footer/>
        </>
    );
}