import axios from "axios";
import { useEffect, useState } from "react";
import Donner from "../componetnts/Donner";

const Donners = () => {
  const [donners, setDonners] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/donner's`)
      .then((res) => setDonners(res?.data))
      .catch((err) => console.error(err));
  }, []);
  //   console.log(donners);
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead className="text-lg md:text-xl lg:text-2xl bg-red-50">
          <tr>
            <th>নাম/ঠিকানা</th>
            <th>ব্লাড গ্রুপ</th>
            <th>স্ট্যাটাস</th>
            <th>একশন</th>
          </tr> 
        </thead>
        {donners.map((donner, index) => (
          <Donner key={index} donner={donner} />
        ))}
      </table>
    </div>
  );
};

export default Donners;
