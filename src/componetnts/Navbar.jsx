import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import menus from "../utils/navmenu";
import { AuthContext } from "../contexts/AuthContextComponent";
import Loading from "./Loading";
import Swal from "sweetalert2";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const { user, loading, logOut, admin } = useContext(AuthContext);

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
    <nav className="p-2 sticky top-0 mb-4 z-20  bg-red-600 shadow-md">
      <div className="navbar container bg-white shadow-md rounded-md mx-auto">
        <div className="navbar-start relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {displayMenu ? (
              <IoMdCloseCircle
                onClick={() => setDisplayMenu(false)}
                className="text-3xl text-red-600"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => setDisplayMenu(true)}
                className="text-3xl text-red-600"
              />
            )}
          </div>
          {displayMenu && (
            <menu
              className="w-screen absolute -top-4 -left-4 shadow-md bg-black bg-opacity-60 text-lg text-red-600 overflow-hidden rounded-md "
              onClick={() => setDisplayMenu(false)}
            >
              <ul className="space-y-3 inline-block px-4 py-12 bg-white min-h-screen rounded-md">
                {menus?.map((m, i) => (
                  <li onClick={() => setDisplayMenu(false)} key={i}>
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
                {admin === "admin" && (
                  <li onClick={() => setDisplayMenu(false)}>
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
            </menu>
          )}
          <a href="/" className="text-3xl font-bold md:ml-4 text-red-600">
            FBN
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-red-600">
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
              className="px-3 py-1 rounded-md font-bold md:text-lg bg-red-500 text-white hover:bg-red-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
