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
import Members from "./pages/Members";

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
            path: "/admin-panel/members",
            element: (
              <AdminProtected>
                <Members />
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
        element: (
          <div className="w-full min-h-screen flex items-center justify-center text-center  bg-red-100 px-4 mb-4">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-red-600 ">
                Under development
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
                hic. Voluptatum veniam unde fugit repellat tenetur non obcaecati
                corporis velit voluptatem, error placeat ullam minus debitis
                consequuntur aliquam similique. Dolore veniam, placeat corrupti
                incidunt pariatur non sit ut? Ipsam neque adipisci ipsa fugiat,
                error rem quaerat quam repudiandae eos fugit sapiente quos
                dolores aliquid, a fuga possimus provident cupiditate! Libero,
                ut numquam? Praesentium sit, cupiditate mollitia rerum
                dignissimos suscipit rem quo repellendus vitae placeat atque,
                nostrum, porro facere! Reiciendis inventore tempore nobis quo
                minus, nisi suscipit sunt! Dolore dicta ut consequuntur at
                ullam, perspiciatis soluta eum cupiditate, blanditiis, voluptas
                quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                debitis ullam nesciunt dolorem, laborum odit sed in dignissimos
                rem doloribus ab recusandae provident similique inventore
                obcaecati tenetur pariatur officiis quisquam corrupti! Dolores
                voluptate libero, inventore distinctio autem animi officiis.
                Quo, iusto delectus? Molestias magnam architecto eos alias
                fugiat dolor quasi vero quod consectetur dolores exercitationem
                explicabo, optio cupiditate inventore praesentium modi velit
                debitis, amet expedita. Excepturi ex omnis aliquid. Dolores
                dolor dolorum, doloribus quod tenetur dignissimos id omnis a
                quasi. Quo eius quia alias dolores voluptates aliquam hic atque,
                fugit omnis assumenda tempore ipsum labore unde molestias nisi
                nesciunt quisquam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique nemo voluptatem modi qui saepe maxime ratione tenetur
                amet consectetur nobis explicabo dolorem, totam dicta! Possimus
                molestiae, dolore aspernatur voluptates voluptatum assumenda
                odio distinctio quod reprehenderit delectus? Maxime beatae
                temporibus assumenda distinctio recusandae. Nostrum accusantium
                numquam tenetur distinctio esse. Assumenda alias nulla
                reprehenderit fugiat pariatur? Ipsa aperiam ullam sapiente
                laudantium velit quos dignissimos, temporibus culpa similique
                quasi deserunt expedita ut odit impedit est minus vero quod,
                nihil voluptates ratione, tempore explicabo amet repellat non.
                Maxime quia quae dolorum, consequuntur id recusandae illo
                voluptate, officiis neque molestiae dicta, provident accusamus
                sapiente expedita?
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
]);

export default router;
