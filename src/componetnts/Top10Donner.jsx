import axios from "axios";
import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";

const Top10Donner = () => {
  const [top10Donners, setTop10Donners] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/top10donner`)
      .then((res) => setTop10Donners(res?.data));
  }, []);
  console.log(top10Donners);
  return (
    <div className="mb-8">
      <h2 className="bg-red-100 p-8 text-center text-4xl text-red-500 font-bold rounded-t-2xl">
        Top Donners
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {top10Donners?.map((donner, index) => (
          <AdminCard key={index} admin={donner} />
        ))}
      </div>
    </div>
  );
};

export default Top10Donner;
