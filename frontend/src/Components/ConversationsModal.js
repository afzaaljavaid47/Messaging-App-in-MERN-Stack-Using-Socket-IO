import { Modal, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useContactContext } from '../Contexts/ContactContext';
import {useConversationContext} from '../Contexts/ConversationContext';

export default function ConversationsModal({ onHide }) {
  var { contacts } = useContactContext();
  var { createConversation } = useConversationContext();
  const [selectedContactsIds, setSelectedContactsIds] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactsIds);
    onHide();
  }
  function handleCheckBoxChange(id) {
    setSelectedContactsIds((preValue) => {
      if(selectedContactsIds.includes(id)){
        return preValue.filter(contactId=>contactId!==id)
      }
      else
      {
        return [...preValue,id]
      }
    })
  }
  return (
    <div>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group key={contact.id}>
              <Form.Check
                type='checkbox'
                id={contact.id}
                value={selectedContactsIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type='submit' className='mt-2'>Create</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}
