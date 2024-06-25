import ScheduleAppointment from "../components/ScheduleAppointment";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between px-24 pt-24 bg-black ">
        <ScheduleAppointment />
      </div>
    </div>
  );
}
