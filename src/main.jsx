import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Layout/Main";
import Jobs from "./components/Jobs";
import Sectors from "./components/Sectors";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import CareerAdvice from "./components/CareerAdvice";
import AuthProvider, { AuthContext } from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import router from "./routes/Routes";

 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}></RouterProvider>
 </AuthProvider>
  </React.StrictMode>
);
