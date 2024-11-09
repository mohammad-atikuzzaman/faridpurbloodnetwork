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
import AdminPanel from "./pages/AdminPanel";
import BloodRequests from "./componetnts/BloodRequests";
import Donneted from "./componetnts/Donneted";
import PatientDetails from "./componetnts/PatientDetails";
import UserProtected from "./protected/UserProtected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <UserProtected>
            <Profile />
          </UserProtected>
        ),
      },
      {
        path: "/donner-details/:id",
        element: (
          <AdminProtected>
            <DonnerDetail />
          </AdminProtected>
        ),
      },
      {
        path: "/admin-panel",
        element: (
          <AdminProtected>
            <AdminPanel />
          </AdminProtected>
        ),
        children: [
          {
            index: true,
            element: (
              <AdminProtected>
                <BloodRequests />
              </AdminProtected>
            ),
          },
          {
            path: "/admin-panel/donated",
            element: (
              <AdminProtected>
                <Donneted />
              </AdminProtected>
            ),
          },
          {
            path: "/admin-panel/patient-details/:id",
            element: (
              <AdminProtected>
                <PatientDetails />
              </AdminProtected>
            ),
          },
        ],
      },
      {
        path: "/donners",
        element: <Donners />,
      },
      {
        path: "/activity",
        element: <Home />,
      },
    ],
  },
]);

export default router;
