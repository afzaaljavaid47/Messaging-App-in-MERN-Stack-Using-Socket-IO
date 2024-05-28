import React,{useRef} from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {useContactContext} from '../Contexts/ContactContext';

export default function ContactsModal({onHide}) {
    var idRef=useRef();
    var nameRef=useRef();
    const {createContext}=useContactContext();
    const handleSubmit=(e)=>{
        e.preventDefault();
        createContext(idRef.current.value,nameRef.current.value);
        onHide();
    }
  return (
    <div className='m-4'>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type='text' required ref={idRef}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' required ref={nameRef}/>
        </Form.Group>
        <Button type='submit' className='mt-2'>Add</Button>
      </Form>
    </div>
  )
}