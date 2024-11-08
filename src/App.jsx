import { Outlet } from "react-router-dom";
import Navbar from "./componetnts/Navbar";
import Footer from "./componetnts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default App;
