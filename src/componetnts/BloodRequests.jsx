import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleRequest from "./SingleRequest";
import { AuthContext } from "../contexts/AuthContextComponent";
import Loading from "./Loading";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);
  const { refetch} = useContext(AuthContext);
  const [load, setLoad]= useState(false)
  useEffect(() => {
    setLoad(true)
    axios(`${import.meta.env.VITE_BASE_URL}/request`)
      .then((res) => {
        setLoad(false)
        setRequests(res.data);
      })
      .catch((err) => {
        setLoad(false)
        console.error(err);
      });
  }, [refetch]);

  //   console.log(requests);
  if(load){
    return <div className="w-full min-h-screen flex items-center justify-center"><Loading/></div>
  }

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
