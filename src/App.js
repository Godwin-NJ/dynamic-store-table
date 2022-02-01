import React,{useState} from 'react';
import './App.css'
import data from './mock-data.json'
import ReadOnlyRow from './components/ReadOnlyRow';


function App() {

const[contact, setContact] = useState(data)



  return (
    <div className="app-container">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
          {contact.map((data,i) => {
            return(
                < ReadOnlyRow data={data} key={i}/>
            )
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
