import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function Paris() {
    return (
        <>
            <HeadNav />
           <main className="checkTour">
           <h1>{tourData["par"].name}</h1>
            <img src={tourData["par"].img} alt="Paris" />
            <p>{tourData["par"].desc}</p>
            <b>{tourData["par"].time}</b>
            <b>{tourData["par"].price}</b>
            <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
           </main>
           <Footer/>
        </>
    );
}