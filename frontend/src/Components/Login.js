import React,{useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import uuid4 from "uuid4";

export default function Login({setUserId}) {
    const userId=useRef();
    function handleSubmit(e){
        e.preventDefault();
        setUserId(userId.current.value);
    }
    function CreateNewId(){
        console.log(uuid4());
        setUserId(uuid4());
    }
    return (
        <Container className="align-items-center d-flex" style={{height:'100vh'}}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control ref={userId} type="text" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginRight:'10px'}}>
                    Login
                </Button>
                <Button variant="secondary" onClick={CreateNewId}>
                    Create A New Id
                </Button>
            </Form>
        </Container>
    )
}
