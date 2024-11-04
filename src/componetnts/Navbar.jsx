import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import menus from "../utils/navmenu";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

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
          <menu className="absolute top-14 -left-2 shadow-md bg-white min-h-screen px-8 py-2 text-lg text-red-500">
            <ul className="space-y-3">
              {menus?.map((m, i) => (
                <li key={i}>
                  <NavLink
                  className={({ isActive }) => (isActive ? "text-red-600 font-semibold underline" : "")}
                  to={m.url}>{m.menu}</NavLink>
                </li>
              ))}
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
                className={({ isActive }) => (isActive ? "text-red-600 font-semibold underline" : "")}
                to={m?.url}
              >
                {m?.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <Link to="/login" className="btn font-bold text-lg bg-red-500 text-white">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
