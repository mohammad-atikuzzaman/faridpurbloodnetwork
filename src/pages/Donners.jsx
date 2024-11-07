import axios from "axios";
import { useEffect, useState } from "react";
import Donner from "../componetnts/Donner";
import { FaSearch } from "react-icons/fa";

const Donners = () => {
  const [donners, setDonners] = useState([]);
  const [villages, setVillages] = useState([]);

  const [selectedVillage, setSelectedVillage] = useState("");
  console.log(selectedVillage);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  console.log(selectedBloodGroup);

  const fetchVillage = () => {
    axios(`${import.meta.env.VITE_BASE_URL}/villages`)
      .then((res) => setVillages(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchVillage();
    axios(`${import.meta.env.VITE_BASE_URL}/donner's`)
      .then((res) => {
        setDonners(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  // console.log(donners);
  // console.log(villages);
  return (
    <div className="">
      <div className="bg-gray-100 p-4 grid md:grid-cols-2 items-center gap-4 mb-8">
        <>
          <form
            action=""
            className="bg-white w-[90%] mx-auto rounded-md flex items-center"
          >
            <input
              type="text"
              placeholder="ডোনার এর নাম দিয়ে সার্চ করুন"
              className="w-[90%] p-4 bg-transparent outline-none border-none"
            />
            <button type="submit" className="w-[10%] border-l-2" title="search">
              <FaSearch className="mx-auto text-red-400 text-2xl" />
            </button>
          </form>
        </>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">ডোনার সর্ট করুন </h2>
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            className="border border-red-400 text-gray-600 font-semibold p-2 rounded-md outline-none"
          >
            <option defaultValue="">--গ্রাম এর নাম--</option>
            {villages.map((village, i) => (
              <option key={i} value={village}>
                {village}
              </option>
            ))}
          </select>
          <select
            value={selectedBloodGroup}
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
            className="border border-red-400 text-gray-600 font-semibold p-2 rounded-md  outline-none"
          >
            <option defaultValue="">--ব্লাড গ্রুপ--</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>
      <div className=" overflow-x-auto">
        <table className="table text-center">
          <thead className="text-lg md:text-xl lg:text-2xl bg-red-50">
            <tr>
              <th>নাম/ঠিকানা</th>
              <th>ব্লাড গ্রুপ</th>
              <th>স্ট্যাটাস</th>
              <th>একশন</th>
            </tr>
          </thead>
          {donners.map((donner, index) => (
            <Donner key={index} donner={donner} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Donners;
