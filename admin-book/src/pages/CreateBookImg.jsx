import { Form, Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBookImg() {
    const navigate = useNavigate();
    let [bookName, setBookName] = useState('');
    let [authorName, setAuthorName] = useState('');
    let [description, setDescription] = useState('');
    let [publisherName, setPublisherName] = useState('');
    let [bookStatus, setbookStatus] = useState('First Hand');
    let [price, setPrice] = useState(0);
    let [language, setLanguage] = useState('English');
    let [quantity, setQuantity] = useState('');
    let [isbnNo, setIsbnNo] = useState('');
    let [image, setImage] = useState('');
    function addBook() {
        // let data = {
        //     bookName: bookName,
        //     authorName: authorName,
        //     description: description,
        //     publisherName: publisherName,
        //     price: price,
        //     language: language,
        //     quantity: quantity,
        //     isbnNo: isbnNo,
        // }
        let formData = new FormData();
        formData.append('bookName', bookName);
        formData.append('authorName', authorName);
        formData.append('description', description);
        formData.append('bookStatus', bookStatus);
        formData.append('publisherName', publisherName);
        formData.append('price', price);
        formData.append('language', language);
        formData.append('quantity', quantity);
        formData.append('isbnNo', isbnNo);
        formData.append('image', image);

        axios({
            url: 'http://localhost:3000/add/book',
            method: 'POST',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            navigate('/book')
        }).catch((err) => {
            console.log(err)
        })
    }

    function returnToBook() {
        navigate('/book');
    }

    return (
        //  <h1>This page  will be create a book</h1>
        <div style={{ width:'700px', height:'600px',margin:'0 auto', padding:'20px', overflow:'scroll'}} className="border border-white border-3">
        <Form className="opacity-100 fs-5">
            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label >Book Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Name" className="bg-transparent"  onChange={(e) => setBookName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Author Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Author Name" className="bg-transparent" onChange={(e) => setAuthorName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold" >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} className="bg-transparent" onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Book Status</Form.Label>
                <Form.Select className="bg-transparent" onChange={(e)=> setbookStatus(e.target.value)}>
                    <option value='First Hand'>FirstHand</option>
                    <option value='Second Hand'>SecondHand</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" className="bg-transparent" placeholder="Enter Publisher" onChange={(e) => setPublisherName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" className="bg-transparent" placeholder="Enter Price" onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Language</Form.Label>
                <Form.Select className="bg-transparent" onChange={(e)=> setLanguage(e.target.value)}>
                    <option value='English'>English</option>
                    <option value='Hindi'>Hindi</option>
                    <option value='Nepali'>Nepali</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Enter quantity" className="bg-transparent" onChange={(e) => setQuantity(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Isbn No</Form.Label>
                <Form.Control type="text" placeholder="Enter isbnNo" className="bg-transparent" onChange={(e) => setIsbnNo(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3 text-dark fw-bold">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" placeholder="Upload Image" className="bg-transparent" onChange={(e) => setImage(e.target.files[0])} />
            </Form.Group>
            <div class="d-flex justify-content-evenly">
            <Button variant='danger' onClick={returnToBook} className='me-5' >Cancel</Button>
            <Button variant='success' onClick={addBook} >Add Book</Button>
            </div>
        </Form>
        </div>
    );
}

export default CreateBookImg;