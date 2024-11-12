import axios from "axios";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContextComponent";
import DialogBox from "./dialogbox/Dialogbox";

const SingleRequest = ({ r }) => {
  const { name, blood, disease, phone, hospital, _id } = r;
  const { setRefetch, refetch } = useContext(AuthContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancel = () => {
    Swal.fire({
      title: "আপনি কি নিশ্চিত?",
      text: "ব্লাড রিকুয়েস্ট টি বাতিল করা হচ্চে!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "বাতিল করুণ!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASE_URL}/delete-donation/${_id}`)
          .then(() => {
            setRefetch(!refetch);

            Swal.fire({
              title: "বাতিল..!",
              text: "বাতিল করা হয়েছে",
              icon: "success",
            });
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <>
      <tr className="text-xs md:text-sm lg:text-base">
        <td>{name}</td>
        <td>{blood}</td>
        <td>{disease}</td>
        <td>{phone}</td>
        <td>{hospital}</td>
        <td>
          <section className="dropdown dropdown-left">
            <button tabIndex={0} role="button" className="btn btn-xs md:btn-sm text-xs md:text-sm m-1">
              Click
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-red-100 z-[1] w-32 p-1 shadow rounded-md"
            >
              <li
                className="bg-green-400 my-1 md:py-1 md:font-medium text-gray-700 rounded-md cursor-pointer"
                onClick={() => setIsDialogOpen(true)}
              >
                গ্রহন করুন
              </li>
              <li className="bg-red-400 my-1 md:py-1 md:font-medium text-gray-700 rounded-md cursor-pointer" onClick={handleCancel}>
                বাতিল করুন
              </li>
            </ul>
          </section>
        </td>
      </tr>
      {isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen} r={r} />}
    </>
  );
};

export default SingleRequest;
