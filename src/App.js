import React,{useState, Fragment} from 'react';
import './App.css'
import data from './mock-data.json'
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {

const[contact, setContact] = useState(data)

const[editableContactId, setEditableContactId] = useState(null)

const[editFormData, setEditFormData] = useState({
  fullName: '',
  address : '',
  phoneNumber : '',
  email : ''
})
// const[formData, setFormData] = useState([])

const handleEditFormChange = (e) => {
  e.preventDefault()
  const name = e.target.name
  const value = e.target.value
  setEditFormData({...editFormData, [name]: value})
  
}


const handleEditClick = (e,contact) => {
  e.preventDefault()
  setEditableContactId(contact.id)

  const EditExistingData = {
    fullName: contact.fullName,
    address : contact.address,
    phoneNumber : contact.phoneNumber,
    email : contact.email
  }
  // const newFormData = {...editFormData}
  setEditFormData(EditExistingData)
}


const handleEditFormSubmit = (e) => {
    e.preventDefault()
    const editContact = {
      id : editableContactId,
      fullName: editFormData.fullName,
      address : editFormData.address,
      phoneNumber : editFormData.phoneNumber,
      email : editFormData.email
    }

    const newContacts = [...contact]
    const index = contact.findIndex((user) => {
      return user.id === editableContactId
    })
    newContacts[index] = editContact
    setContact(newContacts)
    setEditableContactId(null)
}


const handleCancelClick = () => {
  setEditableContactId(null)
}

const deleteContact = (contactID) => {
  const newContacts = [...contact]
  const index = contact.findIndex((user) => user.id === contactID)
  newContacts.splice(index,1)
  setContact(newContacts)

}

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
          {contact.map((data,i) => {
            return(
              <Fragment key={data.id}>
                { editableContactId === data.id ? 
                  <EditableRow 
                    handleEditFormChange={handleEditFormChange}
                    editFormData={editFormData} 
                    handleCancelClick={handleCancelClick}
                    /> 
                  : 
                  < ReadOnlyRow data={data} 
                      handleEditClick={handleEditClick}
                      deleteContact={deleteContact}
                    />
                }
                
              </Fragment>
            )
          })}
          
        </tbody>
      </table>
      {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default App;
