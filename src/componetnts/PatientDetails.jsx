import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PatientDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/patient-details/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(data);
  return (
    <div className="bg-gray-600 text-white min-h-screen">
      <h2 className="text-4xl font-semibold uppercase animate-pulse text-center p-5 mb-4">Patient details</h2>
      <hr />
      <table className="table text-center">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>রোগীর নাম</th>
            <td>{data?.name}</td>
          </tr>
          <tr>
            <th>রোগের নাম</th>
            <td>{data?.disease}</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>ব্লাড গ্রুপ</th>
            <td>{data?.blood}</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>ফোন নাম্বার</th>
            <td>{data?.phone}</td>
          </tr>
          <tr>
            <th>হাস্পাতাল এর নাম</th>
            <td>{data?.hospital}</td>
          </tr>
          <tr>
            <th>তারিখ</th>
            <td>Brice Swyre</td>
          </tr>
          <tr>
            <th>ডোনার এর নাম</th>
            <td>Brice Swyre</td>
          </tr> 
          <tr>
            <th>ডোনার এর ফোন নাম্বার</th>
            <td>Brice Swyre</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientDetails;
