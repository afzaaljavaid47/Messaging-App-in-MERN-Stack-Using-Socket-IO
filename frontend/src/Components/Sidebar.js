import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Conversations from './Conversations';
import Contacts from './Contacts';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ConversationsModal from './ConversationsModal';
import ContactsModal from './ContactsModal';

export default function Sidebar({ id }) {
    const [activeKey,setActiveKey]=useState('Conversations');
    const [modalOpen,setModalOpen]=useState(false);
    function closeModal(){
        setModalOpen(!modalOpen);
    }
    var conversationOpen=activeKey==='Conversations';
    return (
        <div style={{width:'250px'}} className='d-flex flex-column'>
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey} id="left-tabs-example" defaultActiveKey="first">
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="Conversations">Conversations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Contacts">Contacts</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content style={{borderRight:'1px solid #E9ECEF'}} className='overflow-auto flex-grow-1'>
                    <Tab.Pane eventKey='Conversations'>
                        <Conversations/>
                    </Tab.Pane>
                    <Tab.Pane eventKey='Contacts'>
                        <Contacts/>
                    </Tab.Pane>
                </Tab.Content>
                <hr/>
                <div>
                    Your Id: <span className='text-muted'>{id}</span>
                </div>
                <Button onClick={()=>setModalOpen(true)} className='rounded-0 mt-2'>
                    New {conversationOpen?'Conversation':'Contact'}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
            {conversationOpen?<ConversationsModal onHide={closeModal}/>:<ContactsModal onHide={closeModal}/>}
            </Modal>
        </div>
    )
}