import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaHandHoldingHeart, FaUsers } from "react-icons/fa";
import moment from "moment";
import { GiLifeTap } from "react-icons/gi";
import { FcStatistics } from "react-icons/fc";

const UserStatistics = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/count-documents`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="text-center bg-red-100 py-6 mt-8 px-4 rounded-t-3xl">
        <FcStatistics className="mx-auto text-3xl" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-600 font-semibold">
          পরিসংখ্যান
        </h2>
        <p className="text-gray-500 font-semibold text-xs md:text-sm lg:text-base mt-2 md:mt-4">
          এখানে পাবেন রক্ত দাতার সংখ্যা, সফল রক্ত দান এবং বর্তমান ব্লাড রিকুয়েস্ট
          সংখ্যা
        </p>
      </div>
      <div className="grid grid-cols-3 text-center border rounded-xl shadow-md w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-2 md:mt-4 hover:scale-[103%] transition-all">
        <div className=" py-8 md:py-10 lg:py-12 ">
          <FaUsers className="mx-auto text-xl text-red-600" />
          <h2 className="font-semibold text-gray-400">ডোনার</h2>
          <CountUp start={0} end={data?.donors} duration={5}>
            {({ countUpRef }) => (
              <span
                className="text-5xl font-bold text-red-600"
                ref={countUpRef}
              />
            )}
          </CountUp>
          <div className="text-xs font-semibold text-gray-400">
            <span>From Nov 1st</span>
            <br />
            <span>To {moment().format("MMM Do YY")}</span>
          </div>
        </div>
        <div className="scale-105 md:scale-110 rounded-md bg-red-200  py-8 md:py-10 lg:py-12 shadow-sm md:shadow-md shadow-red-400">
          <GiLifeTap className="mx-auto text-xl" />
          <h2 className="font-semibold text-gray-400">ডোনেশন</h2>
          <CountUp start={0} end={data?.successfully} duration={5}>
            {({ countUpRef }) => (
              <span className="text-5xl font-bold" ref={countUpRef} />
            )}
          </CountUp>
          <div className="text-xs font-semibold text-gray-400">
            <span>From Nov 1st</span>
            <br />
            <span>To {moment().format("MMM Do YY")}</span>
          </div>
        </div>
        <div className=" py-8 md:py-10 lg:py-12">
          <FaHandHoldingHeart className="mx-auto text-xl text-red-600" />
          <h2 className="font-semibold text-gray-400">রিকুয়েস্ট </h2>
          <CountUp start={0} end={data?.bloodRequest} duration={5}>
            {({ countUpRef }) => (
              <span
                className="text-5xl font-bold  text-red-600"
                ref={countUpRef}
              />
            )}
          </CountUp>
          <div className="text-xs font-semibold text-gray-400">
            <span>From Nov 1st</span>
            <br />
            <span>To {moment().format("MMM Do YY")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserStatistics;
