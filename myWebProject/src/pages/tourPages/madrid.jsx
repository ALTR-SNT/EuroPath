import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function Madrid() {
    return (
        <>
        <HeadNav/>
        <main className="checkTour">
        <h1>{tourData["ma"].name}</h1>
        <img src={tourData["ma"].img} alt="Madrid" />
        <p>{tourData["ma"].desc}</p>
        <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
        </main>
        <Footer/>
        </>
    );
}