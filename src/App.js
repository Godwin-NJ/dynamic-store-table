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
const[formData, setFormData] = useState([])

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

  return (
    <div className="app-container">
      <form>
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
                    editFormData={editFormData} /> 
                  : 
                  < ReadOnlyRow data={data} handleEditClick={handleEditClick}/>
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
