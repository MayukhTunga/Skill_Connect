"use client"
import { useState } from "react"
import { FaRegEnvelope } from "react-icons/fa"
import {MdPerson} from "react-icons/md"
import { MdLockOutline } from "react-icons/md"
import Link from "next/link"

const SignupForm = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [signUpData, setSignupData] = useState({});
    const formSubmit = (e: any) => {
        e.preventDefault()
        const information = {firstName: firstName, lastName: lastName, email: email, password: password}
        setSignupData(information)
        console.log(information)
    }
    return (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl overflow-hidden">
                <div className="w-3/5 p-5 text-black">
                    <div className="text-left font-bold">
                        Skill <span className="text-violet-700">Connect</span>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-violet-700 mb-2">Enter your details</h2>
                        <div className="border-2 w-10 border-violet-700 inline-block mb-10"></div>
                        <div className="flex flex-col items-center">
                            <form action="" onSubmit={formSubmit}>
                                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                    <MdPerson className="text-gray-400 m-2"/>
                                    <input 
                                        type="string" 
                                        name="firstname" 
                                        placeholder="First Name" 
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                    <MdPerson className="text-gray-400 m-2"/>
                                    <input 
                                        type="string" 
                                        name="lastname" 
                                        placeholder="Last Name" 
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                    <FaRegEnvelope className="text-gray-400 m-2"/>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="bg-gray-100 w-64 p-2 flex items-center rounded-2xl mb-5">
                                    <MdLockOutline className="text-gray-400 m-2"/>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        className="bg-gray-100 outline-none text-sm flex-1"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="border-2 border-violet-700 rounded-full px-12 py-2 inline-block font-semibold hover:bg-violet-700 hover:text-white">
                                    Create account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 bg-violet-700 text-white py-36 px-12">
                    <h2 className="text-3xl font-bold mb-2">Have an account?</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    <p className="mb-10">Login here</p>
                    <Link href="/login">
                        <p className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-black">
                            Login
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default SignupForm;