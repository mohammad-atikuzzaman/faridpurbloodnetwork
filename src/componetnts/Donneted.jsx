import axios from "axios";
import { useEffect, useState } from "react";
import SuccessfullDonation from "./SuccessfullDonation";

const Donneted = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/donated`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
      <div className=" overflow-x-auto">
        {data.length > 0 ? (
          <table className="table text-center">
            <thead className="text-lg md:text-xl lg:text-2xl bg-red-50">
              <tr>
                <th>নাম</th>
                <th>ব্লাড গ্রুপ</th>
                <th>রোগ</th>
                <th>ফোন নাম্বার</th>
                <th>হসপিটাল</th>
              </tr>
            </thead>
            <tbody className="font-normal text-gray-500">
              {data.map((r, i) => (
                <SuccessfullDonation key={i} r={r} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center text-center min-h-screen">
            <h2 className="text-3xl font-semibold text-red-400">
              There are no donation
            </h2>
          </div>
        )}
      </div>
  );
};

export default Donneted;
