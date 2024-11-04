import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

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
            path:"/donner",
            element: <Home/>
        },
        {
            path:"/activity",
            element: <Home/>
        }
    ]
  }
]);

export default router;