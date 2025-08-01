import HeadNav from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Avatar from "../assets/Yan.jpg"

export default function AboutUs() {
    return (
        <>
         <HeadNav/>
         <main>
         <h1>Про нас</h1>
         <section>
            <h2>Ласкаво просимо до туристичної агенції EuroPath!</h2>
                <p> 
                   EuroPath — перший проект від EXO-Y4, який має власну історію в продовж 4+ років. Спочатку це був простий неоновий сайт, але з часом він перетворився на повноцінний сайт для турагенства.
                   <br/>
                   Сайт EuroPath народився як невеличкий експеримент — простенька неонова сторінка, створена з інтересу до веброзробки та дизайну. 
                   На початку це був лише статичний сайт із кількома розділами, без адаптивності, інтеграцій і реальної логіки. 
                   <br/>
                   Проте з часом усе змінилося.
                   <br/>
                Поступово, паралельно з власним розвитком у сфері фронтенду та бекенду, сайт зазнав десятків ітерацій. 
                Кожна нова версія була результатом експериментів, вивчення сучасних технологій, нових патернів дизайну, оптимізації швидкодії й адаптивності. 
                Те, що колись було простим проєктом для практики — перетворилося на практичний туристичний сайт, готовий працювати з реальними користувачами. 
                </p>
         </section>
         <section className="abUs">
        <div>
            <h2>Головний розробник проекту:</h2>
            <img src={Avatar} alt="Me"/>
            <h3>ALTR-SNT</h3>
        </div>
        <div>
            <h2>Зворотній зв&apos;язок </h2>
            <button onClick={() => (window.location.href = 'https://forms.gle/HuteCy2n91cSUuSB6')}>Google Forms</button>
         </div>
         </section>
         </main>
         <Footer/>
        </>     
    );
}