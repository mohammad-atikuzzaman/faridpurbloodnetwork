import axios from "axios";
import { useEffect, useState } from "react";
import Donner from "../componetnts/Donner";
import { FaSearch } from "react-icons/fa";
import Loading from "../componetnts/Loading";

const Donners = () => {
  const [donner, setDonner] = useState([]);
  const [villages, setVillages] = useState([]);
  const [load, setLoad] = useState(false);

  const [selectedVillage, setSelectedVillage] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  const fetchVillage = () => {
    axios(`${import.meta.env.VITE_BASE_URL}/villages`)
      .then((res) => setVillages(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchVillage();
    setLoad(true);
    axios(
      `${
        import.meta.env.VITE_BASE_URL
      }/donner?village=${selectedVillage}&bloodGroup=${selectedBloodGroup}&userName=${search}`
    )
      .then((res) => {
        setLoad(false);
        setDonner(res.data);
      })
      .catch((err) => {
        setLoad(false);
        console.error(err);
      });
  }, [selectedVillage, selectedBloodGroup, search]);

  // console.log(donner);
  // console.log(villages);

  if (load) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="bg-gray-100 p-4 grid md:grid-cols-2 items-center gap-4 mb-2">
        <form
          onSubmit={handleSearch}
          className="bg-white w-[90%] mx-auto rounded-md flex items-center"
        >
          <input
            type="text"
            name="search"
            placeholder="ডোনার এর নাম দিয়ে সার্চ করুন"
            className="w-[75%] md:w-[90%] p-4 bg-transparent outline-none border-none"
          />
          <button
            type="submit"
            className="w-[25%] md:w-[10%] border-l-2"
            title="search"
          >
            <FaSearch className="mx-auto text-red-600 text-2xl" />
          </button>
        </form>

        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-base md:text-lg">
            ডোনার সর্ট করুন
          </h2>
          <select
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
            className="border border-red-400 text-gray-600 font-semibold p-2 rounded-md outline-none"
          >
            <option value="">গ্রাম এর নাম</option>
            {villages.map((village, i) => (
              <option key={i} value={village}>
                {village.length > 10 ? village.slice(0, 10) : village}
              </option>
            ))}
          </select>
          <select
            value={selectedBloodGroup}
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
            className="border border-red-400 text-gray-600 font-semibold p-2 rounded-md  outline-none"
          >
            <option value="">ব্লাড গ্রুপ</option>
            <option value="A-positive">A+</option>
            <option value="A-negative">A-</option>
            <option value="B-positive">B+</option>
            <option value="B-negative">B-</option>
            <option value="AB-positive">AB+</option>
            <option value="AB-negative">AB-</option>
            <option value="O-positive">O+</option>
            <option value="O-negative">O-</option>
          </select>
        </div>
      </div>
      {donner.length > 0 ? (
        <div className="overflow-x-auto min-h-screen">
          <table className="table text-center">
            <thead className="text-xs md:text-sm lg:text-base bg-red-100">
              <tr>
                <th className="text-left">নাম/ঠিকানা</th>
                <th>ব্লাড গ্রুপ</th>
                <th>স্ট্যাটাস</th>
                {/* <th>একশন</th> */}
              </tr>
            </thead>
            <tbody className="">
              {donner.map((donner, index) => (
                <Donner key={index} donner={donner} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="w-full min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">There are no donner</h2>
        </div>
      )}
    </>
  );
};

export default Donners;
