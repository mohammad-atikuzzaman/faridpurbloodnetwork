const SuccessfullDonation = ({ r }) => {
  const { name, blood, disease, phone, hospital, _id } = r;
  return (
    <tr className="text-xs">
      <td>{name}</td>
      <td>{blood}</td>
      <td>{disease}</td>
      <td>
        <a
          href={`/admin-panel/patient-details/${_id}`}
          className="btn btn-xs md:btn-sm text-xs md:text-sm font-light md:font-normal lg:font-medium "
        >
          বিস্তারিত
        </a>
      </td>
    </tr>
  );
};

export default SuccessfullDonation;
