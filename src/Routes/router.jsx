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
import GotMarriedRoute from "../Pages/DashBoard/UserDashboard/GotMarriedRoute";
import UserBioDataPage from "../Pages/DashBoard/UserDashboard/UserBioDataPage";
import DetailsBioData from "../Pages/BioDatas/DetailsBioData";
import PrivateRoute from "./PrivateRoute";
import Payment from "../Pages/DashBoard/UserDashboard/Payment";
import Four04Page from "../Pages/Four04Page/Four04Page";
import AdminRoute from "./AdminRoute";
import UserProfile from "../Pages/DashBoard/UserDashboard/UserProfile";
import AdminProfile from "../Pages/DashBoard/AdminDashBoard/AdminProfile";
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
          path:'/allBiodataDetails/:id',
          element:<PrivateRoute><DetailsBioData></DetailsBioData></PrivateRoute>,
          loader:({params})=>fetch(`https://a-12-perfect-pair-server.vercel.app/allBioData/${params.id}`)

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
  path:"/dashboard",
  element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
  children:[
    {
      path: "adminDashboard",
      element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
    },
    {
      path:"manageUsers",
      element:<AdminRoute><AdminManageUser></AdminManageUser></AdminRoute>
    },
    {
      path:"appPremium",
      element:<AdminRoute><MakePremium></MakePremium></AdminRoute>
    },
    {
      path:"appContact",
      element:<AdminRoute><ApproveContactRequest></ApproveContactRequest></AdminRoute>
    },
    {
      path:"ssStory",
      element:<AdminRoute><SuccessStory></SuccessStory></AdminRoute>
    },
    {
      path:"adminProfile",
      element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
    },
    {
      path:"addEditBio",
      element:<UserBioDataPage></UserBioDataPage>
    },
    {
      path:"viewBio",
      element:<ViewBioData></ViewBioData>
    },
    {
      path:"userProfile",
      element:<UserProfile></UserProfile>
    },
    {
      path:"myContactReq",
      element:<MyContactRequest></MyContactRequest>
    },
    {
      path:"favBioData",
      element:<FavouriteBioData></FavouriteBioData>
    },
    {
      path:"gotMarried",
      element:<GotMarriedRoute></GotMarriedRoute>
    },
    {
      path:"payment",
      element:<Payment></Payment>
    }
  ]
},
{
  path:"*",
  element:<Four04Page></Four04Page>
}

  ])