import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Home from "../components/Home";
import PrivateRoute from "./PrivateRoute";
import Jobs from "../components/Jobs";
import CareerAdvice from "../components/CareerAdvice";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Sectors from "../components/Sectors";
import ProfileCommon from "../components/ProfileCommon";
import ProfileHome from "../components/ProfileHome";
import ProfileBanner from "../components/ProfileBanner";
import Dashboard from "../components/profilesinfromation/Dashboard";
import Profile from "../components/profilesinfromation/Profile";
import ProfilesNav from "../components/Layout/ProfilesNav";
import Terms from "../components/Terms";
import Policy from "../components/Policy";
import Community from "../components/profilesinfromation/Community";
import JobAlert from "../components/profilesinfromation/JobAlert";
import Blog from "../components/profilesinfromation/Blog";
import Feedback from "../components/profilesinfromation/Feedback";
import EditAccount from "../components/profilesinfromation/EditAccount";
import Settings from "../components/profilesinfromation/Settings";
import Messages from "../components/profilesinfromation/Messages";
import Password from "../components/profilesinfromation/Password";

const router = createBrowserRouter([
  {
    path:'/',
    element: <ProfilesNav></ProfilesNav>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<ProfileBanner></ProfileBanner>
      },
      {
       path: "/dashboard",
       element:<Dashboard></Dashboard>
      },
      {
       path:'/community',
       element:<Community></Community>
      },
      {
        path:'/jobalert',
        element:<JobAlert></JobAlert>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
       path:'/feedback',
       element:<Feedback></Feedback>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/account',
        element:<EditAccount></EditAccount>
      },
      {
       path:'/messages',
       element:<Messages></Messages>
      },
      {
        path:'/setting',
        element:<Settings></Settings>
      },
      {
        path:'/password',
        element:<Password></Password>
      }
    ]
     
  },
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/home", element: <Home></Home> },
      {
        path: "/jobs",
        element: (
          <PrivateRoute>
            <Jobs></Jobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/careerAdvice",
        element: <CareerAdvice></CareerAdvice>,
      },
      {
        path: "/sector",
        element: <Sectors></Sectors>,
        loader: () => fetch('sectors.json') 
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/terms",
        element:<Terms></Terms>
      },
      {
        path: "/policy",
        element:<Policy></Policy>
      }
    ],
  
  },

]);

export default router;
