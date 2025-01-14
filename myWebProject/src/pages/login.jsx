import HeadNav from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "../styles/form.css";
export default function Login(){
    return(
        <>
        <HeadNav/>
        <main>
        <form className="form">
        <h1>Вхід</h1>
            <label>
                Ім&apos;я
            </label>
            <input type="text" name="email" placeholder="Введіть свою пошту"/>
            <label>
                Пароль
            </label>
            <input type="password" name="password" placeholder="Введіть свій пароль"/>
            <input type="submit" value="Увійти"/>
            <p>Нема акаунту? <a href="/register">Зареєструйтесь</a></p>
        </form>
        </main>
        <Footer/>
        </>
    );
}