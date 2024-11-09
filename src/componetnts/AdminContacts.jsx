import React from "react";
import AdminCard from "./AdminCard";

const AdminContacts = () => {
  return (
    <div>
      <div className="text-center py-6 mb-2 bg-red-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500">
          এডমিন এর সাথে যোগাযোগ করুন
        </h2>
        <p className="text-gray-500 font-semibold mt-4">
          এডমিন এর সাথে সরাসরি কথা বলতে কল করুন ০১৭০০০০০০০ নাম্বার এ অথবা ফেসবুক
          এ যোগাযোগ করুন
        </p>
      </div>
      <div className="pb-6 px-4 grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        <AdminCard />
        <AdminCard />
        <AdminCard />
      </div>
    </div>
  );
};

export default AdminContacts;
