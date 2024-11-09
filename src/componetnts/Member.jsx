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
            <div className="mask mask-squircle h-14 w-14">
              <img src={photoUrl} alt={userName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
            <div className="text-sm opacity-50">{village}</div>
          </div>
        </div>
      </td>
      <td>{phone}</td>
      <td>
        <select
          value={role}
          onChange={handleRoleChange}
          className="border p-2 rounded-md font-semibold"
        >
          <option value="admin">Admin</option>
          <option value="donner">Donner</option>
        </select>
      </td>
    </tr>
  );
};

export default Member;
