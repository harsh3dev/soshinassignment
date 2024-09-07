import Dashboard from "./components/Dashboard";
import MobileSideBar from "./components/MobileSideBar";
import SideBarComponent from "./components/SideBarComponent";

export default function Home() {

  return (
    <main className=" relative flex min-h-screen items-start justify-start w-full">
      <div className=" hidden sm:block " ><SideBarComponent/></div>
      <MobileSideBar/>
      <Dashboard/>      
    </main>
  );
}
