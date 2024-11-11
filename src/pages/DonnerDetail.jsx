import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDifferenceInDays } from "../componetnts/Donner";

const DonnerDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/donner-details/${id}`)
      .then((res) => setData(res?.data))
      .catch((err) => console.error(err));
  }, [id]);

  const donationDiff = getDifferenceInDays(data?.lastDonation || new Date());

  return (
    <div>
      <div className="mx-auto bg-gradient bg-red-400 py-6">
        <img
          src={data?.photo || "/logo.png"}
          alt={data?.display || "user Name"}
          className="w-[200px] h-auto rounded-full mx-auto bg-white border-4 hover:bg-gray-400 transi"
        />
        <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-8 text-center">
          {data?.name}
        </h2>
      </div>
      {data && (
        <div className="overflow-x-auto mb-6">
          <table className="table table-zebra text-center">
            {/* head */}
            <thead className="bg-red-100">
              <tr>
                <th className="text-lg">টাইটেল</th>
                <th className="text-lg">বিস্তারিত</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ব্লাড গ্রুপ</td>
                <td>{data?.blood}</td>
              </tr>
              <tr>
                <td>ফোন নাম্বার</td>
                <td>{data?.phone}</td>
              </tr>
              <tr>
                <td>শেষ রক্ত দান করেছে</td>
                <td>
                {data?.lastDonationDate ? (
                    <>
                      <span>{donationDiff}</span> <br /> <span>দিন আগে</span>{" "}
                    </>
                  ) : (
                    <span>কখনো দান করে নি !</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>ইমেইল </td>
                <td>{data?.email}</td>
              </tr>
              <tr>
                <td>গ্রাম</td>
                <td>{data?.village}</td>
              </tr>
              <tr>
                <td>পরিচয়</td>
                <td>{data?.role}</td>
              </tr>
              <tr>
                <td>রক্ত দান করছেন</td>
                <td>{data?.donationCount} বার</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DonnerDetail;
