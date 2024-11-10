import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export function getDifferenceInDays(lastDonatedDate) {
  const donatedDate = new Date(lastDonatedDate);
  const currentDate = new Date();

  const differenceInMillis = currentDate - donatedDate;
  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
  const differenceInDays = Math.floor(
    differenceInMillis / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
}

const Donner = ({ donner }) => {
  const { userName, photoUrl, village, bloodGroup, lastDonationDate, _id } =
    donner;
  const donationDiff = getDifferenceInDays(lastDonationDate);

  return (
    <tr className="text-xs">
      <td>
        <div className="flex items-center gap-3 text-left">
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
      <td>{bloodGroup}</td>
      <td className="">
        <div>
          {donationDiff >= 90 ? (
            <BsCheckLg className="text-green-600 text-xl mx-auto" />
          ) : (
            <RxCross2 className="text-red-600 text-xl mx-auto" />
          )}
        </div>
        <div className="md:text-sm opacity-50">
          <span>রক্ত দিয়েছে </span> {donationDiff} <span>দিন আগে</span>
        </div>
      </td>
      <th>
        <Link to={`/donner-details/${_id}`} className="btn btn-sm">
          বিস্তারিত
        </Link>
      </th>
    </tr>
  );
};

export default Donner;
