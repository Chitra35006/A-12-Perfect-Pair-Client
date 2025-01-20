import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import BioData from "../Pages/BioDatas/BioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import AdminHome from "../Pages/DashBoard/AdminDashBoard/AdminHome";
import AdminManageUser from "../Pages/DashBoard/AdminDashBoard/AdminManageUser";
import MakePremium from "../Pages/DashBoard/AdminDashBoard/MakePremium";
import ApproveContactRequest from "../Pages/DashBoard/AdminDashBoard/ApproveContactRequest";
import SuccessStory from "../Pages/DashBoard/AdminDashBoard/SuccessStory";
import AddEditBioData from "../Pages/DashBoard/UserDashboard/AddEditBioData";
import ViewBioData from "../Pages/DashBoard/UserDashboard/ViewBioData";
import MyContactRequest from "../Pages/DashBoard/UserDashboard/MyContactRequest";
import FavouriteBioData from "../Pages/DashBoard/UserDashboard/FavouriteBioData";
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
        },
        {
          path:"signup",
          element:<SignUp></SignUp>
        }
    ]
},
{
  path:"dashboard",
  element:<DashBoard></DashBoard>,
  children:[
    {
      path: "dashboard",
      element:<AdminHome></AdminHome>
    },
    {
      path:"manageUsers",
      element:<AdminManageUser></AdminManageUser>
    },
    {
      path:"appPremium",
      element:<MakePremium></MakePremium>
    },
    {
      path:"appContact",
      element:<ApproveContactRequest></ApproveContactRequest>
    },
    {
      path:"ssStory",
      element:<SuccessStory></SuccessStory>
    },
    {
      path:"addEditBio",
      element:<AddEditBioData></AddEditBioData>
    },
    {
      path:"viewBio",
      element:<ViewBioData></ViewBioData>
    },
    {
      path:"myContactReq",
      element:<MyContactRequest></MyContactRequest>
    },
    {
      path:"favBioData",
      element:<FavouriteBioData></FavouriteBioData>
    }
  ]
}
  ])