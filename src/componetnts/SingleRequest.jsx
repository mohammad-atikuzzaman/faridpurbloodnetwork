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
      <tr>
        <th>{name}</th>
        <th>{blood}</th>
        <th>{disease}</th>
        <th>{phone}</th>
        <th>{hospital}</th>
        <th>
          <section className="dropdown dropdown-left dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-red-50 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li
                className="bg-green-400 my-1 rounded-md"
                onClick={()=>setIsDialogOpen(true)}
              >
                <a>গ্রহন করুন</a>
              </li>
              <li className="bg-red-400 my-1 rounded-md" onClick={handleCancel}>
                <a>বাতিল করুন</a>
              </li>
            </ul>
          </section>
        </th>
      </tr>
      {
        isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen}/>
      }
    </>
  );
};

export default SingleRequest;
