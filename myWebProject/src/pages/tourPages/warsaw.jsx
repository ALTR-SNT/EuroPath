import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function Warsaw() {
    return (
        <>
            <HeadNav />
           <main className="checkTour">
           <h1>{tourData["wa"].name}</h1>
            <img src={tourData["wa"].img} alt="Warsaw" />
            <p>{tourData["wa"].desc}</p>
            <b>{tourData["wa"].time}</b>
            <b>{tourData["wa"].price}</b>
            <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
           </main>
           <Footer/>
        </>
    );
}