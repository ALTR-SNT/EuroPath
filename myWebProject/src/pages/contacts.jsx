import HeadNav from "../components/header"
import Footer from "../components/footer"
function Contacts () {
    return(
        <>
         <HeadNav/>
         <main>
        <section style={{"textAlign": "center"}}>
        <h1 style={{paddingBottom: "20px"}}>Контакти</h1>
          <h2>Телефон: </h2>
          <h3>+3801234567</h3>
          <h2>Email: </h2>
          <h3>5yVX2@example.com</h3>
          <h2>Адреса: </h2>
          <h3>вул. ???, місто ***, ******</h3>
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
             width={"700"} 
            height={"400"} 
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