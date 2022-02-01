import React from 'react';

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <tr>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder='fullName' 
                name="fullName"
                value={editFormData.fullName}
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder='address' 
                value={editFormData.address}
                name="address"
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder='phoneNumber' 
                value={editFormData.phoneNumber}
                name="phoneNumber"
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <input 
                type="text" 
                required="required" 
                placeholder='email' 
                value={editFormData.email}
                name="email"
                onChange={handleEditFormChange}
            />
        </td>
        <td>
            <button type="submit">save</button>
            <button type="submit" onClick={handleCancelClick}>
                Cancel
            </button>
        </td>
    </tr>
  );
};

export default EditableRow;
