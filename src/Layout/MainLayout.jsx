import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { useTheme } from "../Provider/ThemeContext";


const MainLayout = () => {
    const {theme} = useTheme();
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp') 
    return (
        <div className="font-roboto overflow-x-hidden">
            
            {noHeaderFooter || <NavBar></NavBar>}
            <div className="flex-grow ">
            <Outlet></Outlet>
            </div>
            {noHeaderFooter || <footer className={`p-4 w-full mt-auto text-center ${theme ==="light"?"bg-[linear-gradient(120deg,#47476b_10%,#fbcfe8_40%,#47476b_90%)]" :"bg-slate-800"}`}>
            <Footer></Footer>
            </footer>}
        </div>
    );
};

export default MainLayout;