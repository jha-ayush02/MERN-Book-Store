import { useState, useEffect } from 'react';
import { Button, Container, Table, Form, Pagination } from 'react-bootstrap'
import axios from 'axios';

function UserList() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        axios({
            url: "http://localhost:3000/users",
            method: "get",
        }).then((res) => {
            setUsers(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <Container >
            {/* <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter book name to search" onChange={(e) => { setSearchBook(e.target.value) }} />
                </Form.Group>
            </Form> */}
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>City</th>
                        <th>State</th>
                        <th style={{ textAlign: 'center' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, index) => (
                        <tr key={index}>
                            {/* <td><img src={book.bookImage} height='50px' width='50px'></img></td> */}
                            <td>{users.firstName}</td>
                            <td>{users.lastName}</td>
                            <td>{users.email}</td>
                            <td>{users.mobileNo}</td>
                            <td>{users.city}</td>
                            <td>{users.state}</td>
                            <td>
                                <Button variant="outline-info" size='sm' className="mx-4" onClick={() => gotoViewBooks()}>
                                    <img src="/images/view_icon.png" className=""></img>
                                </Button>
                                <Button variant="outline-warning" size='sm' className='mx-4' onClick={() => gotoEditBook(book._id)}>
                                    <img src="/images/edit_icon.png" className=""></img>
                                </Button>
                                <Button variant="outline-danger" size='sm' className='mx-4' onClick={() => deletebook(book._id)}>
                                    <img src="/images/delete_icon.svg" className=""></img>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center">
                {/* <Pagination size="md" >{items}</Pagination> */}
            </div>
        </Container>
    )
}

export default UserList