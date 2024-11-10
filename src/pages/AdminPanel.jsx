import { NavLink, Outlet, useLocation } from "react-router-dom";

const AdminPanel = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="text-center bg-red-50 py-6 space-y-4 rounded-t-3xl px-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-400">
          এডমিন কন্ট্রোল পানেল
        </h2>
        <p className="text-semibold text-gray-500">
          এখান থেকে সকল ইউজার, থেকে সুরু করে, ব্লাড রিকুয়েস্ট, বিগত ডনেসন, বাতিল
          করা ডনেসন নিয়ন্ত্রণ করা যাবে
        </p>
      </div>

      {pathname.includes("patient-details") ? (
        ""
      ) : (
        <div role="tablist" className="tabs tabs-lifted overflow-hidden">
          <NavLink
            to="/admin-panel"
            role="tab"
            className={
              pathname === "/admin-panel"
                ? "tab tab-active text-white [--tab-bg:orange] font-semibold [--tab-border-color:red]"
                : "tab text-gray-500 font-semibold"
            }
          >
            ব্লাড রিকুয়েস্ট
          </NavLink>
          <NavLink
            to="/admin-panel/donated"
            role="tab"
            className={
              pathname === "/admin-panel/donated"
                ? "tab tab-active text-white [--tab-bg:orange] font-semibold [--tab-border-color:red]"
                : "tab text-gray-500 font-semibold"
            }
          >
            সফল ডনেশন
          </NavLink>

          <NavLink
            to="/admin-panel/members"
            role="tab"
            className={
              pathname === "/admin-panel/members"
                ? "tab tab-active text-white [--tab-bg:orange] font-semibold [--tab-border-color:red]"
                : "tab text-gray-500 font-semibold"
            }
          >
            সদস্য
          </NavLink>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default AdminPanel;
