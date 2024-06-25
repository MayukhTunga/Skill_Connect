import Categories from "../components/Categories";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between px-24 pt-20 bg-black ">
        <Categories />
      </main>
    </div>
  );
}
