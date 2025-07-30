import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function Bratislava() {
    return (
        <>
        <HeadNav />
        <main className="checkTour">
        <h1>{tourData["bra"].name}</h1>
        <img src={tourData["bra"].img} alt="Bratislava" />
        <p>{tourData["bra"].desc}</p>
        <b>{tourData["bra"].time}</b>
        <b>{tourData["bra"].price}</b>
        <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
        </main>
        <Footer/>
        </>  
    );
}