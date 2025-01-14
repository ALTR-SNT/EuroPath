import "../styles/header.css"
function HeadNav (){
    return(
     <>
        <header>
            <h1><strong>die Weintrauben </strong> </h1>
            <p> <i>Тури по всій Європі</i></p>  
       </header>
        <nav>
            <ul>
                <li><a href="/">Головна</a></li>
                <li><a href="/tours">Подорожі</a></li>
                <li><a href="/aboutus">Про нас</a></li>
                <li><a href="/contacts">Контакти</a></li>
                <li><a href="/register">Реєстрація</a></li>
            </ul>
        </nav>
     </>
   );
}
export default HeadNav