import { IoIosArrowRoundBack } from "react-icons/io";


export default function LoginHeader() {
    return (
        <div className="signUpHeaderDiv">
                    <div>
                        <IoIosArrowRoundBack size={35} />
                    </div>
                    <div className="loginHeaderTitle" >
                        <h2>Login</h2>
                    </div>
        </div>
    )
}