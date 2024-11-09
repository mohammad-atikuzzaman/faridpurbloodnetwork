import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Member from "../componetnts/Member";
import { AuthContext } from "../contexts/AuthContextComponent";

const Members = () => {
  const { refetch } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/donner?userName=${search}`)
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => console.error(err));
  }, [search, refetch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };
  //  console.log(members)
  return (
    <div>
      <div className="bg-red-100 py-2">
        <form
          onSubmit={handleSearch}
          className="bg-white w-[90%] mx-auto rounded-md flex items-center"
        >
          <input
            type="text"
            name="search"
            placeholder="ডোনার এর নাম দিয়ে সার্চ করুন"
            className="w-[90%] p-4 bg-transparent outline-none border-none"
          />
          <button type="submit" className="w-[10%] border-l-2" title="search">
            <FaSearch className="mx-auto text-red-400 text-2xl" />
          </button>
        </form>
      </div>
      <div className="overflow-x-auto min-h-screen">
        <table className="table text-center">
          <thead className="text-lg md:text-xl lg:text-2xl bg-red-50">
            <tr>
              <th>নাম/ঠিকানা</th>
              <th>ফোন নাম্বার</th>
              <th>পরিচয়</th>
            </tr>
          </thead>
          <tbody className="">
            {members.map((member, index) => (
              <Member key={index} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
