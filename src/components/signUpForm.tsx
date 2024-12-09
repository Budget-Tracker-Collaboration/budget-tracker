
import { FcGoogle } from "react-icons/fc";
import PasswordDiv from "./passwordDiv";
import Link from "next/link";


export default function SignUpForm() {
    return (
        <div className="signUpFormDiv">
        <form className="signUpFrom">
            <input type="text" className="signUpInput" placeholder="Name"/>
            <input type="text" className="signUpInput" placeholder="Email"/>
            <PasswordDiv />
            <div className="signUpCheckboxDiv">
                <input type="checkbox" id="checkbox" className="checkbox"/>
                <label id="checkbox">
                    By signing up, you agree to the 
                    <a href="https://www.example.com/terms-of-service-placeholder" target="_blank">Terms of Service and Privacy Policy</a>
                </label>
            </div>
            <button className="signUpBtn">Sign Up</button>
            <p className="orWithText">Or with</p>
            <button className="googleIconBtn">
                <span><FcGoogle size={24}/></span>
                Sign Up with Google
            </button>
            <p className="accountQText">Already have an account? <Link href="/login" className="linktoSignUp">Login</Link></p>
        </form>
    </div>
    )
}