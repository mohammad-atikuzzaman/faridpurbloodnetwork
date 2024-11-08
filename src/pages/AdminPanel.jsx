import { NavLink, Outlet, useLocation } from "react-router-dom";

const AdminPanel = () => {
  const location = useLocation();
  return (
    <div>
      <div className="text-center bg-red-50 py-6 space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-400">
          এডমিন কন্ট্রোল পানেল
        </h2>
        <p className="text-semibold text-gray-500">
          এখান থেকে সকল ইউজার, থেকে সুরু করে, ব্লাড রিকুয়েস্ট, বিগত ডনেসন, বাতিল
          করা ডনেসন নিয়ন্ত্রণ করা যাবে
        </p>
      </div>

      <div role="tablist" className="tabs tabs-lifted overflow-hidden">
        <NavLink
          to="/admin-panel"
          role="tab"
          className={
            location.pathname === "/admin-panel"
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
            location.pathname === "/admin-panel/donated"
              ? "tab tab-active text-white [--tab-bg:orange] font-semibold [--tab-border-color:red]"
              : "tab text-gray-500 font-semibold"
          }
        >
          সফল ডনেশন
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminPanel;
