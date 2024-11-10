import { FaPhoneAlt } from "react-icons/fa";

const AdminCard = ({ admin }) => {
  const { userName, phone, photoUrl, role } = admin;

  return (
    <div className="card card-compact  bg-red-100 shadow-xl">
      <figure className="h-64 max-w-72">
        <img src={photoUrl} alt={userName} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="font-semibold text-xl">
          {userName}
          <div className="badge bg-red-500 text-white ml-2">{role}</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <a className="btn w-full bg-red-400" href={`tel:+88${phone}`}>
            <FaPhoneAlt className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
