import { FaRegEnvelope } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"

export default function LoginForm() {
    return (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl overflow-hidden">
                <div className="w-3/5 p-5 text-black">
                    <div className="text-left font-bold">
                        Skill <span className="text-violet-700">Connect</span>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-violet-700 mb-2">Log in to account</h2>
                        <div className="border-2 w-10 border-violet-700 inline-block mb-10"></div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                <FaRegEnvelope className="text-gray-400 m-2"/>
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </div>
                            <div className="flex w-64 mb-5"> 
                                <label className="flex items-center text-xs font-light">
                                    <input type="checkbox" name="remember" className="mr-1"/>
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="border-2 border-violet-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-700 hover:text-white">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 bg-violet-700 text-white py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2">No Account?</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-10">Fill in your details to sign up</p>
                    <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black">
                        Sign up
                    </a>
                </div>
            </div>
        </main>
    )
}
