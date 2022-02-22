import { useState } from 'react';
import './App.css';
//import Contacts from './components/Contacts/Contacts';
import contactsFromJson from "./contacts.json"





function App() {

  const firsFiveContacts = contactsFromJson.slice(0, 5)

  const [contacts, setContacts] = useState(firsFiveContacts)

  const randomIndex = Math.floor(Math.random()* contactsFromJson.length)

  const randomContact = index => {
    const filteredContacts = contacts.filter(contact => contact.idx != index)
    
  }


 
  return (
    <div className="App">
      <h1>Iron Contacs</h1>
      <tr>
        <td>PICTURE </td>
        <td>NAME </td>
        <td>POPULARITY </td>
        <td>OSCAR </td>
        <td>EMMY </td>
      </tr>

      {
        contacts.map((contact, idx )=> {
          return (
            <tr key={idx}>
              <td><img src={contact.pictureUrl}></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>

              <td>
                {contact.wonOscar ? <p>🏆</p> : <p>No Oscar  </p>}
              </td>
              <td>
                {contact.wonEmmy ? <p>🏆</p> : <p>No Emmy  </p>}
              </td>
             
            </tr>
          )
        })
      }

    </div>
  );
}

export default App
