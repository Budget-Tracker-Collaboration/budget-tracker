import PasswordDiv from "./passwordDiv";
import Link from "next/link";


export default function LoginForm() {
    return (
        <div className="signUpFormDiv">
        <form className="signUpFrom">
            <input type="text" className="signUpInput" placeholder="Email"/>
            <PasswordDiv />
            <button className="loginBtn">Login</button>
            <Link href="#" className="forgotPass">Forgot Password?</Link>
            <p className="accountQText">Don't have an account yet? <Link href="/signup" className="linktoSignUp">Sign Up</Link></p>
        </form>
    </div>
    )
}