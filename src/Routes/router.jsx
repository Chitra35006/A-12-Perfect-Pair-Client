import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import BioData from "../Pages/BioDatas/BioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignIn from "../Pages/SignIn/SignIn";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"biodata",
            element:<BioData></BioData>
        },
        {
            path:"aboutUs",
            element:<AboutUs></AboutUs>
        },
        {
            path:"contactUs",
            element: <ContactUs></ContactUs>
        },
        {
            path:"login",
            element:<SignIn></SignIn>
        }
    ]
}
  ])