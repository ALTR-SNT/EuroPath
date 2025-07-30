import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function Berlin() {
    return (
        <>
            <HeadNav />
            <main className="checkTour">
            <h1>{tourData["ber"].name}</h1>
            <img  src={tourData["ber"].img} alt="Berlin" />
            <p>{tourData["ber"].desc}</p>
            <b>{tourData["ber"].time}</b>
            <b>{tourData["ber"].price}</b>
            <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
            </main>
            <Footer/>
        </>
    );
}