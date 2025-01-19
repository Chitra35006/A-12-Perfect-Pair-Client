import { Outlet } from "react-router-dom";

import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div className="font-roboto overflow-x-hidden">
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            <footer className="bg-gray-900 p-4 w-full mt-auto text-center text-white">
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;