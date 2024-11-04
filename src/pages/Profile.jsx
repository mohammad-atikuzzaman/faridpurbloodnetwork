import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import axios from "axios";

const Profile = () => {
  const { user, setUserInfo, userinfo } = useContext(AuthContext);
  console.log(user?.email);

  const getUserInfo = async (email) => {
    const res = await axios(
      `${import.meta.env.VITE_BASE_URL}/user-info/${email}`
    );
    setUserInfo(res?.data)
  };

  useEffect(() => {
    getUserInfo(user?.email);
  }, [user]);

  console.log(userinfo)


  return (
    <div>
      <div className=" mx-auto bg-gradient relative">
        <img
          src={user?.photoURL || "/logo.png"}
          alt={user?.displayName || "user Name"}
          className="w-[200px] md:w-[300px] h-auto mx-auto rounded-full"
        />
        <div className="absolute top-1/2 bg-red-400 min-h-52 md:min-h-64 w-full -z-10 flex items-center justify-center ">
          <h2 className="font-bold text-white text-3xl md:text-4xl lg:text-5xl mt-8 md:mt-16 pt-6 md:pt-12">
            {user?.displayName}
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto mt-28 mb-6">
        <table className="table table-zebra text-center">
          {/* head */}
          <thead className="bg-red-50">
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
              <td>ফোন নাম্বার</td>
              <td>{userinfo?.userEmail}</td>
            </tr>
            <tr>
              <td>গ্রাম</td>
              <td>{userinfo?.village}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
