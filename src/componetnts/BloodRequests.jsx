import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleRequest from "./SingleRequest";
import { AuthContext } from "../contexts/AuthContextComponent";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);
  const { refetch } = useContext(AuthContext);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/request`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, [refetch]);

  //   console.log(requests);
  return (
    <div className="min-h-screen overflow-x-auto">
      {requests.length > 0 ? (
        <table className="table text-center">
          <thead className="text-xs md:text-sm lg:text-base bg-red-100">
            <tr>
              <th>নাম</th>
              <th>ব্লাড গ্রুপ</th>
              <th>রোগ</th>
              <th>ফোন নাম্বার</th>
              <th>হসপিটাল</th>
              <th>অ্যাকশান</th>
            </tr>
          </thead>
          <tbody className="font-normal text-gray-500">
            {requests.map((r, i) => (
              <SingleRequest key={i} r={r} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center text-center min-h-screen">
          <h2 className="text-3xl font-semibold text-red-600">
            There are no blood request now
          </h2>
        </div>
      )}
    </div>
  );
};

export default BloodRequests;
