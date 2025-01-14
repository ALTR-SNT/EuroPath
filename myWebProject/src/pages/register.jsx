import HeadNav from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "../styles/form.css";
export default function Register() {
    return (
        <>
         <HeadNav/>
         <main>
         <form className="form">
             <h1>Реєстрація</h1>
             <label>
                 Ім&apos;я
             </label>
             <input type="text" name="name" placeholder="Введіть свої ім'я"/>
             <label>
                 Пошта
             </label>
             <input type="email" name="email" placeholder="Введіть свої пошту"/>
             <label>
                 Пароль
             </label>
             <input type="password" name="password" placeholder="Введіть свій пароль"/>
             <input type="submit" value="Реєстрація"/>
             <p>Вже є аккаунт? <a href="/login">Увійти</a></p>
         </form>
         </main>
         <Footer/>
        </>     
    );
}