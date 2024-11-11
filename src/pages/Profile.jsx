import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import axios from "axios";
import { getDifferenceInDays } from "../componetnts/Donner";

const Profile = () => {
  const { user, setUserInfo, userinfo } = useContext(AuthContext);

  const getUserInfo = async (email) => {
    const res = await axios(
      `${import.meta.env.VITE_BASE_URL}/user-info/${email}`
    );
    setUserInfo(res?.data);
  };

  useEffect(() => {
    getUserInfo(user?.email);
  }, [user]);


  const donationDiff = getDifferenceInDays(
    userinfo?.lastDonationDate || new Date()
  );

  return (
    <div>
      <div className="mx-auto bg-gradient bg-red-400 py-6">
        <img
          src={user?.photoURL || "/logo.png"}
          alt={user?.displayName || "user Name"}
          className="w-[200px] h-auto rounded-full mx-auto bg-white border-4 hover:bg-gray-400 transi"
        />
        <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-8 text-center">
          {user?.displayName}
        </h2>
      </div>
      {user && (
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
                <td>{userinfo?.bloodGroup}</td>
              </tr>
              <tr>
                <td>ফোন নাম্বার</td>
                <td>{userinfo?.phone}</td>
              </tr>
              <tr>
                <td>ইমেইল</td>
                <td>{userinfo?.userEmail}</td>
              </tr>
              <tr>
                <td>গ্রাম</td>
                <td>{userinfo?.village}</td>
              </tr>
              <tr>
                <td>শেষ রক্ত দান করেছে</td>
                <td>
                  {userinfo?.lastDonationDate ? (
                    <>
                      <span>{donationDiff}</span> <br /> <span>দিন আগে</span>{" "}
                    </>
                  ) : (
                    <span>কখনো দান করে নি !</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>পরিচয়</td>
                <td>{userinfo?.role}</td>
              </tr>
              <tr>
                <td>রক্ত দান করছেন</td>
                <td>{userinfo?.donationCount} বার</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Profile;
