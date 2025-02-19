import axios from "axios";
import { useEffect, useState } from "react";
import SuccessfullDonation from "./SuccessfullDonation";
import Loading from "./Loading";

const Donneted = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    axios(`${import.meta.env.VITE_BASE_URL}/donated`)
      .then((res) => {
        setLoad(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoad(false);
        console.error(err);
      });
  }, []);

  
  if (load) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className=" overflow-x-auto min-h-screen">
      {data.length > 0 ? (
        <table className="table text-center">
          <thead className="text-xs md:text-sm lg:text-base bg-red-100">
            <tr>
              <th>রোগীর নাম</th>
              <th>ব্লাড গ্রুপ</th>
              <th>রোগ</th>
              <th>অ্যাকশান</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {data.map((r, i) => (
              <SuccessfullDonation key={i} r={r} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center text-center min-h-screen">
          <h2 className="text-3xl font-semibold text-red-600">
            There are no donation
          </h2>
        </div>
      )}
    </div>
  );
};

export default Donneted;
