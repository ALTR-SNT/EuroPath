import HeadNav from "../../components/header.jsx";
import {tourData} from "../../components/data.jsx";
import Footer from "../../components/footer.jsx";
export default function London() {
    return (
        <>
        <HeadNav />
        <main className="checkTour">
        <h1>{tourData["lo"].name}</h1>
        <img src={tourData["lo"].img} alt="London" />
        <p>{tourData["lo"].desc}</p>
        <b>{tourData["lo"].time}</b>
        <b>{tourData["lo"].price}</b>
        <button onClick={() => (window.location.href = '/payment')}>Оплата туру</button>
        </main>
        <Footer/>
        </> 
    );
}