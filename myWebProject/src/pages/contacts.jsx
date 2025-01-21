import HeadNav from "../components/header"
import Footer from "../components/footer"
function Contacts () {
    return(
        <>
         <HeadNav/>
         <main>
        <section className="contacts">
        <h1 style={{paddingBottom: "20px"}}>Контакти</h1>
          <h3>Телефон: </h3>
          <p>+3801234567</p>
          <h3>Email: </h3>
          <p>5yVX2@example.com</p>
          <h3>Адреса: </h3>
          <p>вул. ???, місто ***, ******</p>
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
            allowFullScreen={true} 
             loading="lazy">
            </iframe>
        </section>
        </main>
        <Footer/>
        </>  
    )
}
export default Contacts