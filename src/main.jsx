import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Routes.jsx";

import { RouterProvider } from "react-router-dom";
import AuthContextComponent from "./contexts/AuthContextComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextComponent>
      <RouterProvider router={router} />
    </AuthContextComponent>
  </StrictMode>
);
