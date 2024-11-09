import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import menus from "../utils/navmenu";
import { AuthContext } from "../contexts/AuthContextComponent";
import Loading from "./Loading";
import Swal from "sweetalert2";
import useIsAdmin from "../hooks/useIsAdmin";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const { user, loading, logOut } = useContext(AuthContext);
  const { admin } = useIsAdmin();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "লগ আউট সফল হয়েছে",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="navbar sticky top-0 mb-4 z-20 bg-white shadow-md rounded-md container mx-auto">
      <div className="navbar-start relative">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          {displayMenu ? (
            <IoMdCloseCircle
              onClick={() => setDisplayMenu(false)}
              className="text-3xl text-red-500"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setDisplayMenu(true)}
              className="text-3xl text-red-500"
            />
          )}
        </div>
        {displayMenu && (
          <menu className="absolute top-14 -left-2 shadow-md bg-white min-h-screen px-8 py-2 text-lg text-red-500 rounded-md">
            <ul className="space-y-3">
              {menus?.map((m, i) => (
                <li key={i}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-red-600 font-semibold underline" : ""
                    }
                    to={m.url}
                  >
                    {m.menu}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-semibold underline" : ""
                  }
                  to="/admin-panel"
                >
                  এডমিন প্যানেল
                </NavLink>
              </li>
            </ul>
          </menu>
        )}
        <a href="/" className="text-3xl font-bold md:ml-4 text-red-500">
          FBN
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-red-500">
          {menus?.map((m, i) => (
            <li key={i} className="bg-transparent">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold underline" : ""
                }
                to={m?.url}
              >
                {m?.menu}
              </NavLink>
            </li>
          ))}
          {admin === "admin" && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-semibold underline" : ""
                }
                to="/admin-panel"
              >
                এডমিন প্যানেল
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li>
                <a>{user?.email}</a>
              </li>
              <li>
                <Link to="/profile" className="font-semibold">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 font-semibold text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : loading ? (
          <Loading />
        ) : (
          <Link
            to="/login"
            className="px-2 py-2 rounded-md font-bold md:text-lg bg-red-500 text-white hover:bg-red-600"
          >
            ডোনার হন
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
