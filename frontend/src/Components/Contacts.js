import React from 'react'
import {useContactContext} from '../Contexts/ContactContext';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Contacts() {
    const {contacts}=useContactContext();
    console.log("Contacts List :",contacts);
  return (
    <>
    <ListGroup variant='flush'>
      {contacts.map(contact=>( 
        <ListGroup.Item style={{borderBottom:'1px solid #E9ECEF'}} key={contact.id}>
            {contact.name}
        </ListGroup.Item>
      ))}
      
    </ListGroup>
    </>
  )
}
