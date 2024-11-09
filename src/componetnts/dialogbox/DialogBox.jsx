import Swal from "sweetalert2";
import "./style.css"; // Importing styles
import axios from "axios";

const updateDonner = (date, phone) => {
  axios
    .patch(`${import.meta.env.VITE_BASE_URL}/update-donner/${phone}`, { date })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const setSuccessDonnation = () => {
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/successful-donation`, {
      name,
      blood,
      disease,
      phone,
      hospital,
      date,
      donner,
      donnerPhone
    })
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "নিশ্চিত!",
          text: "নিশ্চিত করা হয়েছে",
          icon: "success",
        });
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/delete-donation/${_id}`)
          .then(() => {
            
            // setRefetch(!refetch)
      })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
};

const DialogBox = ({ setIsDialogOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const date = new Date().toLocaleDateString();

    updateDonner(date, phone);
  };

  return (
    <>
      <div className="backdrop" onClick={() => setIsDialogOpen(false)}></div>
      <div className="dialog-box">
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
      </div>
    </>
  );
};

export default DialogBox;
