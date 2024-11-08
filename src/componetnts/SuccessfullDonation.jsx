const SuccessfullDonation = ({ r }) => {
  const { name, blood, disease, phone, hospital } = r;
  return (
    <tr>
      <th>{name}</th>
      <th>{blood}</th>
      <th>{disease}</th>
      <th>{phone}</th>
      <th>{hospital}</th>
    </tr>
  );
};

export default SuccessfullDonation;
