import React, { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import { FaPhoneVolume } from "react-icons/fa6";
import axios from "axios";

const AdminContacts = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/admins`)
      .then((res) => {
        setAdmins(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="text-center py-6 mb-2 bg-red-100 rounded-t-3xl">
        <FaPhoneVolume className="mx-auto text-3xl text-red-600" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">
           যোগাযোগ করুন
        </h2>
        <p className="text-gray-500 font-semibold text-xs md:text-sm lg:text-base mt-4">
          সভাপতি এর সাথে সরাসরি কথা বলতে কল করুন ০১৭০০০০০০০ নাম্বার এ অথবা  এডমিন গন এর সাথে যোগাযোগ করুন ।
        </p>
      </div>
      <div className="pb-6 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {admins.map((admin,index)=> <AdminCard key={index} admin={admin}/>)}
      </div>
    </div>
  );
};

export default AdminContacts;
