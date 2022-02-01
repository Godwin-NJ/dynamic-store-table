import React from 'react';

const ReadOnlyRow = ({data, handleEditClick,deleteContact}) => {
    // console.log(data)
    const {id,fullName,address,phoneNumber,email} = data
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
                <button type="submit" onClick={() => deleteContact(id)}>Delete</button>
            </td>
            </tr>
    )
};

export default ReadOnlyRow;
