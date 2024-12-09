import { IoIosArrowRoundBack } from "react-icons/io";


export default function SignUpHeader() {
    return (
        <div className="signUpHeaderDiv">
                    <div>
                        <IoIosArrowRoundBack size={35} />
                    </div>
                    <div className="signUpHeaderTitle" >
                        <h2>Sign Up</h2>
                    </div>
        </div>
    )
}