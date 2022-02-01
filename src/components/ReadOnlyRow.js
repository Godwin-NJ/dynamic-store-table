import React from 'react';

const ReadOnlyRow = ({data}) => {
    console.log(data)
    const {id,fullName,address,phoneNumber,email} = data
  return (
            <tr >
            <td>{fullName}</td>
            <td>{address}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            </tr>
    )
};

export default ReadOnlyRow;
