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
    <tr className="text-xs md:text-sm">
      <td>
        <Link to={`/donner-details/${_id}`} className="flex items-center gap-3 text-left">
          <div className="avatar">
            <div className="mask mask-squircle h-8 md:h-10 lg:h-14 w-8 md:w-10 lg:w-14">
              <img src={photoUrl} alt={userName} />
            </div>
          </div>
          <div>
            <div className="font-medium">{userName}</div>
            <div className="opacity-50">{village}</div>
          </div>
        </Link>
      </td>
      <td className="font-light">{bloodGroup}</td>
      <td>
        <div>
          {lastDonationDate ? (
            <>
              {donationDiff >= 90 ? (
                <BsCheckLg className="text-green-600 text-xl mx-auto" />
              ) : (
                <RxCross2 className="text-red-600 text-xl mx-auto" />
              )}
            </>
          ) : (
            <BsCheckLg className="text-green-600 text-xl mx-auto" />
          )}
        </div>
        <div className="md:text-sm opacity-50">
          {lastDonationDate ? (
            <span>রক্ত দিয়েছে {donationDiff} দিন আগে</span>
          ) : (
            <span>কখনো দান করে নি !</span>
          )}
        </div>
      </td>
      {/* <th>
        <Link
          to={`/donner-details/${_id}`}
          className="btn btn-xs md:btn-sm text-xs font-normal"
        >
          বিস্তারিত
        </Link>
      </th> */}
    </tr>
  );
};

export default Donner;
