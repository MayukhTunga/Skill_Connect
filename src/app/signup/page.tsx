import SignupForm from "../components/signup-component/SignupForm";

export default function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-custom-start to-custom-end">
            <SignupForm />
        </div>
    )
}