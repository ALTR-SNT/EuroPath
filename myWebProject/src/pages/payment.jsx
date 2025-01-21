import HeadNav from "../components/header.jsx";
import Footer from "../components/footer.jsx";
export default function Payment() {
    return (
        <>
        <HeadNav />
            <main>
                 <h1> Оплата туру</h1>
               <section id = "paymentS">
               <form className="form">
               <h2>Форма для оплати</h2>
                <input type="text" placeholder="Ім'я" id="nameUser"/>
                <input type="email" placeholder="@email" id="emailUser"/>
                <input type="number"  placeholder="Номер картки" id="cardNum"/>
                <button type="submit">Оплатити</button>
              </form>
               </section>
            </main>
        <Footer/>
        </>
    )
}