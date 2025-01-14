import HeadNav from "../components/header.jsx";
import Footer from "../components/footer.jsx";
export default function Payment() {
    return (
        <>
        <HeadNav />
            <main>
                <h1 style = {{textAlign: "center"}}> Оплата туру</h1>
               <section id = "paymentS">
               <h2>Виберіть спосіб оплати:</h2>
                <button>
                    Оплата через телеграм-бота
                </button>
              <h2>Або</h2>
              <form>
                <input type="text" placeholder="Ім'я" id="nameUser"/>
                <input type="email" placeholder="@email" id="emailUser"/>
                <input type="number"  placeholder="Номер картки" id="cardNum"/>
              </form>
               </section>
            </main>
        <Footer/>
        </>
    )
}