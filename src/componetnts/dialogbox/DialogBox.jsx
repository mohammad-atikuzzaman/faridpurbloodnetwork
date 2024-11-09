import Swal from "sweetalert2";
import "./style.css"; // Importing styles
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextComponent";

// this api for update donner info
const updateDonner = (date, donnerPhone, setIsDialogOpen) => {
  axios
    .patch(`${import.meta.env.VITE_BASE_URL}/update-donor/${donnerPhone}`, {
      date,
    })
    .then((res) => {
      if (res.status === 200) setIsDialogOpen(false);
    })
    .catch((err) => console.error(err));
};

// this api for save donation data
const setSuccessDonnation = (
  name,
  blood,
  disease,
  phone,
  hospital,
  date,
  donner,
  donnerPhone,
  _id,
  setRefetch,
  refetch
) => {
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/successful-donation`, {
      name,
      blood,
      disease,
      phone,
      hospital,
      date,
      donner,
      donnerPhone,
    })
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "নিশ্চিত!",
          text: "ডনেশন টি নিশ্চিত করা হয়েছে",
          icon: "success",
        });
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/delete-donation/${_id}`)
          .then(() => {
            setRefetch(!refetch);
          })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
};

const DialogBox = ({ setIsDialogOpen, r }) => {
  const { name, blood, disease, phone, hospital, _id } = r;
  const { setRefetch, refetch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const donner = form.name.value;
    const donnerPhone = form.phone.value;
    const date = new Date().toLocaleDateString();

    updateDonner(date, donnerPhone, setIsDialogOpen);

    setSuccessDonnation(
      name,
      blood,
      disease,
      phone,
      hospital,
      date,
      donner,
      donnerPhone,
      _id,
      setRefetch,
      refetch
    );
  };

  return (
    <>
      <section
        className="backdrop"
        onClick={() => setIsDialogOpen(false)}
      ></section>
      <section className="dialog-box">
        <h2 className="text-xl font-semibold">ডোনার এর তথ্য</h2>
        <p className="mb-4">
          ডোনার এর নাম এবং ফোন নাম্বার দেওয়ার পরে কনফার্ম করুন
        </p>
        <form onSubmit={handleSubmit}>
          <label className="text-left font-semibold">
            ডোনার এর নাম
            <input type="text" name="name" required />
          </label>
          <label className="text-left font-semibold">
            ডোনার এর নাম্বার
            <input type="tel" name="phone" required />
          </label>
          <button type="submit">কনফার্ম</button>
        </form>
      </section>
    </>
  );
};

export default DialogBox;
