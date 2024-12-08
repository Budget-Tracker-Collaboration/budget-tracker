import Image from "next/image";
import Link from "next/link";
import { GrSecure } from "react-icons/gr";
import { MdOutlineMail, MdOutlinePerson } from "react-icons/md";

export default function Register() {
    return (
        <section className="flex flex-row-reverse justify-center items-center h-screen">
            <Image
                src={"/undraw_Authentication_re_svpt.png"}
                alt="login image"
                width={500}
                height={500}
            />
            <form className="max-w-sm">
                <h1 className="text-[#63FFA5] font-bold text-2xl">Bud Tracker</h1>
                <h2 className="text-3xl font-bold mt-1">Register an account</h2>
                <p className="text-slate-400 text-sm">Welcome! start by creating an account</p>
                <div className="flex items-center justify-center border p-2 h-10 rounded-sm my-6 cursor-pointer">
                    <Image
                        src={"https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"}
                        alt="google icon"
                        width={20}
                        height={20}
                    />
                     <span className="font-semibold ml-3 text-sm">Google</span>
                </div>
                <div className="flex justify-center items-center gap-4 mb-5">
                    <hr className="w-full text-black" />
                    <span className="text-slate-400 text-sm whitespace-nowrap">Or register with email</span>
                    <hr className="w-full text-black" />
                </div>
                <div className="relative">
                    <input type="text" id="username" name="username" required placeholder="Username" className="border outline-none py-1 px-8 w-full rounded-md h-10 text-sm" />
                    <MdOutlinePerson className="absolute left-2 top-3 text-lg text-slate-800" />
                </div>

                <div className="relative">
                    <input type="email" id="email" name="email" required placeholder="Email" className="border outline-none py-1 px-8 w-full rounded-md h-10 text-sm" />
                    <MdOutlineMail className="absolute left-2 top-3 text-lg text-slate-800" />
                </div>

                <div className="relative">
                <input type="password" id="password" name="password" required placeholder="Password" className="border outline-none py-1 px-8 w-full rounded-md h-10 mt-2 text-sm" />
                <GrSecure className="absolute left-2 top-5 text-lg text-slate-800" />
                </div>

                <Link href="/forgot-password" className="text-sm mt-2 block text-[#63FFA5]">Forgot Password?</Link>
                <button type="submit" className="w-full py-2 bg-[#63FFA5] text-white rounded-md my-5">Register</button>
                <p className="text-center">Already have an account? <Link href="/login" className="text-sm text-[#63FFA5]">Login</Link></p>
            </form>
        </section>
    )
}