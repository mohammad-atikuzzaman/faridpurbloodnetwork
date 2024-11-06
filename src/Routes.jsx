import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Donners from "./pages/Donners";
import DonnerDetail from "./pages/DonnerDetail";
import AdminProtected from "./protected/AdminProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/register",
            element: <Register/>
        },
        {
            path:"/profile",
            element: <Profile/>
        },
        {
            path:"/donner-details/:id",
            element: <AdminProtected><DonnerDetail/></AdminProtected>
        },
        {
            path:"/donners",
            element: <Donners/>
        },
        {
            path:"/activity",
            element: <Home/>
        }
    ]
  }
]);

export default router;