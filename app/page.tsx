import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-start w-full">
      <div className="hidden md:block"><Sidebar/></div>
      
      <Dashboard/>      
    </main>
  );
}
