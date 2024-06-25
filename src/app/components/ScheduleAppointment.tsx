"use client";
import CalendlyEmbed from "../components/CalendlyEmbed";

export default function ScheduleAppointment() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <h1 className="text-white text-center text-4xl font-bold my-8">
        Schedule an <span className="text-purple-600">Appointment</span>
      </h1>
      <div className="w-full flex justify-center">
        <CalendlyEmbed url="https://calendly.com/s1834r1/30min" />
      </div>
    </div>
  );
}
