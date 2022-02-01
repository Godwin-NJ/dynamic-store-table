import React from 'react';

const ReadOnlyRow = ({data, handleEditClick}) => {
    // console.log(data)
    const {fullName,address,phoneNumber,email} = data
  return (
            <tr >
            <td>{fullName}</td>
            <td>{address}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
            <td>
                <button 
                    type='button' 
                    onClick={(e) => handleEditClick(e,data)}
                 >
                    Edit
                </button>
            </td>
            </tr>
    )
};

export default ReadOnlyRow;
