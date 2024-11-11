import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import { FaHandHoldingHeart } from "react-icons/fa";

const BloodReqest = () => {
  const [load, setLoad] = useState(false);
  const handleReqestBlood = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const hospital = form.hospital.value;
    const disease = form.disease.value;
    const blood = form.bloodGroup.value;
    const info = { name, phone, hospital, disease, blood };

    const isValidPhoneNumber = (phone) => /^01[789534][0-9]{8}$/.test(phone);
    if (!isValidPhoneNumber(phone)) {
      return Swal.fire({
        icon: "error",
        title: "দুঃখিত",
        text: "আপনার ১১ সংখ্যার ফোন নাম্বার দিন ।",
      });
    }
    setLoad(true);

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/blood-request`, info)
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "আবেদন সফল হয়েছে",
            text: "কর্তৃপক্ষ কিছুক্ষন এর মধ্যে আপনার সাথে যোগাযোগ করবেন ।",
            showConfirmButton: false,
            timer: 3000,
          });
          form.reset();
          setLoad(false);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="text-center my-8">
      <div className="bg-red-100 py-6 mb-2 px-2 md:mb-6 rounded-t-3xl">
        <FaHandHoldingHeart className="mx-auto text-3xl text-red-600" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold  text-red-600">
          রক্তের জন্য আবেদন করুণ
        </h2>
        <p className="font-semibold text-gray-500 text-xs md:text-sm lg:text-base mt-2 md:mt-4">
          আপনার কেন রক্ত লাগবে, কোথায় লাগবে, রোগীর নাম, রোগীর সাথে যোগাযোগ এর
          জন্য ফোন নাম্বার, রক্তের গ্রুপ -- সব তথ্য সঠিক ভাবে দিয়ে রক্তের জন্য
          আবেদন করুণ।
        </p>
      </div>
      <form
        onSubmit={handleReqestBlood}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-4 border border-red-100 mx-2 rounded-xl shadow-md"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">নাম</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="রোগীর নাম"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">ফোন নাম্বার</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="ফোন নাম্বার"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">হসপিটাল</span>
          </label>
          <input
            type="text"
            name="hospital"
            placeholder="যে হসপিটাল এ আছে, তার নাম"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">রোগ বর্ণনা</span>
          </label>
          <input
            type="text"
            name="disease"
            placeholder="কেন রক্ত লাগবে"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control md:col-span-2">
          <label htmlFor="options" className="label font-semibold">
            রক্তের গ্রুপ
          </label>
          <select
            id="options"
            name="bloodGroup"
            className="select select-bordered w-full"
          >
            <option value="">রক্ত গ্রুপ নির্বাচন করুন</option>
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

        <div className="form-control mt-6 md:col-span-2">
          <button
            disabled={load}
            type="submit"
            className="btn bg-red-400 font-bold text-lg text-white"
          >
            {load ? <Loading /> : "আবেদন করুণ"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BloodReqest;
