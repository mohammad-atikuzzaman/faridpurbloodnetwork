/* eslint-disable react/prop-types */
import { FaPhoneAlt } from "react-icons/fa";

const AdminCard = ({ admin }) => {
  const { userName, phone, photoUrl, role } = admin;

  return (
    <div className="card card-compact  bg-red-100 shadow-xl">
      <figure className="h-40 md:h-64">
        <img src={photoUrl} alt={userName} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-base md:text-lg lg:text-xl">
          {userName}
          <div className="inline-block px-1 text-xs rounded-md bg-red-500 text-white ml-1 md:ml-2">{role}</div>
        </h2>
        <p className="font-semibold text-xs md:text-sm lg:text-lg text-gray-400">For contact you can call the admin.</p>
        <div className="card-actions justify-end">
          <a className="btn btn-sm md:btn-md w-full bg-red-400" href={`tel:+88${phone}`}>
            <FaPhoneAlt className="text-white text-lg md:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;