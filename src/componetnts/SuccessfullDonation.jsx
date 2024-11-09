const SuccessfullDonation = ({ r }) => {
  const { name, blood, disease, phone, hospital, _id } = r;
  return (
    <tr>
      <th>{name}</th>
      <th>{blood}</th>
      <th>{disease}</th>
      <th>
        <a href={`/admin-panel/patient-details/${_id}`} className="btn">
          বিস্তারিত
        </a>
      </th>
    </tr>
  );
};

export default SuccessfullDonation;
