import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import Swal from "sweetalert2";

const Member = ({ member }) => {
  const { setRefetch, refetch } = useContext(AuthContext);
  const { userName, photoUrl, village, phone, _id, role } = member;

  const handleRoleChange = (event) => {
    const updateRole = event.target.value;
    axios
      .patch(`${import.meta.env.VITE_BASE_URL}/update-role`, {
        role: updateRole,
        id: _id,
      })
      .then((res) => {
        console.log(res);
        setRefetch(!refetch);
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "পরিচয় পরিবর্তন সফল হয়েছে ।",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3  text-left">
          <div className="avatar">
            <div className="mask mask-squircle h-8 md:h-10 lg:h-14 w-8 md:w-10 lg:w-14">
              <img src={photoUrl} alt={userName} />
            </div>
          </div>
          <div>
            <div className="font-semibold text-xs md:text-sm lg:text-base">{userName}</div>
            <div className="text-xs md:text-sm opacity-50">{village}</div>
          </div>
        </div>
      </td>
      <td className="text-xs md:text-sm text-gray-500">{phone}</td>
      <td>
        <select
          value={role}
          onChange={handleRoleChange}
          className="border p-1 md:p-2 rounded-md text-xs md:text-sm"
        >
          <option value="admin">Admin</option>
          <option value="donner">Donner</option>
        </select>
      </td>
    </tr>
  );
};

export default Member;
