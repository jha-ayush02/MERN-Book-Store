import React from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    let [show, setshow] = useState(true);
    let [login, setLogin] = useState(true);
    let [signup, setSignUp] = useState(false);
    let [title, setTitle] = useState('Login');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mobileNo: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleClose = () => {
        setshow(false);
        window.location.reload(); // to refresh the page
    };

    function showSignUpModal() {
        setLogin(false);
        setSignUp(true);
        setTitle('SignUp');
    }

    function showLoginModal() {
        setLogin(true);
        setSignUp(false);
        setTitle('Login');
    }

    function addUser() {
        if(user.password !== confirmPassword)
        {
            alert('Passwords do not match');
            return;
        }
        else{
        axios({
            url: 'http://localhost:3000/add/user',
            method : 'POST',
            data : user,
        }).then((res) => {
            if(res.data.success)
            {
                alert('SignUp Successful...');
                handleClose();
                showLoginModal();
            }
        }).catch((err) => {
            console.log('Error Occured', err);
            alert(err.response.data.message);
            setSignUp(false);
        });
    }
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    login &&
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Login
                        </Button>
                        <p>Don't have account?<span class="ms-4 text-primary"><Button variant="outline-dark" type="submit" size="sm" onClick={showSignUpModal}>
                            SignUp
                        </Button></span></p>
                    </Form>
                }
                {
                    signup &&
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>First name</Form.Label>
                                <Form.Control name='firstName' type="text" placeholder="Enter firstname" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name='lastName' type="text" placeholder="Enter lastname" onChange={handleChange}/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" required='true' placeholder="Enter email" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Contact No.</Form.Label>
                                <Form.Control name='mobileNo' type="text" placeholder="Enter mobile no." onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control name='address' placeholder="Enter your address..." onChange={handleChange}/>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>City</Form.Label>
                                <Form.Control name='city' type="text" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>State</Form.Label>
                                <Form.Control name='state' type="text" onChange={handleChange} />
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group> */}

                            <Form.Group as={Col} >
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control name='zipCode' type="text"  onChange={handleChange}/>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Enter password" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="confirm password" onChange= {(e)=>setConfirmPassword(e.target.value) } />
                            </Form.Group>
                        </Row>
                        <Button variant="outline-success" type="submit" onClick={addUser}>
                            SignUp
                        </Button>
                        <p>Already have account?<span class="ms-4 text-primary"><Button variant="outline-dark" type="submit" size="sm" onClick={showLoginModal}>
                            Login
                        </Button></span></p>
                    </Form>
                }
            </Modal.Body>
        </Modal>
    )
}

export default Login