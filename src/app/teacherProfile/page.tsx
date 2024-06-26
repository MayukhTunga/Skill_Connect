import TeacherProfile from "../components/TeacherProfile";
import Navbar from "../components/Navbar";
export default function page(){
    return(
        <div>
            <Navbar/>
            <div className="flex min-h-screen flex-col items-center justify-between px-24 pt-20 bg-gradient-to-b from-custom-start to-custom-end">
                <TeacherProfile/>
            </div>
        </div>
    );
}