import HeadNav from "../components/header.jsx";
import Tour from "../components/tour.jsx";
import Footer from "../components/footer.jsx";
import "../styles/tour.css";
export default function Tours() {
    return (
        <>
         <HeadNav/>
         <main>
        <section className="tourSec">
        <Tour id={"par"}></Tour>
         <Tour id={"ma"}></Tour>
         <Tour id={"lo"}></Tour>
         <Tour id={"bra"}></Tour>
         <Tour id={"ber"}></Tour>
         <Tour id={"wa"}></Tour>
        </section> 
         </main>
         <Footer/>
        </>     
    );
}