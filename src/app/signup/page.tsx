import SignupForm from "../components/signup-component/SignupForm";

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <SignupForm />
        </div>
    )
}