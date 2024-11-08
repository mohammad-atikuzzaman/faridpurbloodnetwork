import axios from "axios";
import { useEffect, useState } from "react";
import SingleRequest from "./SingleRequest";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/request`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(requests);
  return (
    <div>
      <div className=" overflow-x-auto">
        <table className="table text-center">
          <thead className="text-lg md:text-xl lg:text-2xl bg-red-50">
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
            {
                requests.map((r,i)=> <SingleRequest key={i} r={r}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BloodRequests;
