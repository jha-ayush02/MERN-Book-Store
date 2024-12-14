import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from 'axios';
function ViewBook() {
    let [book, setBook] = useState({
        bookName: '',
        authorName: '',
        description: '',
        publisherName: '',
        price: 0,
        bookStatus: '',
        language: '',
        quantity: '',
        isbnNo: '',
    });
    const [bookImage, setBookImage] = useState(null);
    const navigate = useNavigate();
    const params = useParams();
    let id = params.id;
    console.log(id, 'id');
    function editBook() {
        const formData = new FormData();
        formData.append('bookName', book.bookName);
        formData.append('authorName', book.authorName);
        formData.append('description', book.description);
        formData.append('publisherName', book.publisherName);
        formData.append('price', book.price);
        formData.append('bookStatus', book.bookStatus);
        formData.append('language', book.language);
        formData.append('quantity', book.quantity);
        formData.append('isbnNo', book.isbnNo);
        formData.append('bookImage', bookImage);
        axios({
            url: 'http://localhost:3000/update/book/' + id,
            method: 'PUT',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            console.log(res.data);
            navigate('/book');
            alert('Book edited successfully');
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        axios({
            url: 'http://localhost:3000/edit/book/' + id,
            method: 'GET'
        }).then((res) => {
            setBook(res.data.data);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [params]);

    function goToBook() {
        navigate('/book');
    }



    return (
        <div style={{ width: '700px', height: '600px', margin: '0 auto', padding: '20px', overflow: 'scroll' }} className="border border-white border-3">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" name="bookName" value={book.bookName}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author Name</Form.Label>
                    <Form.Control type="text" name="authorName" value={book.authorName}  />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={book.description}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Publisher</Form.Label>
                    <Form.Control type="text" name="publisherName" value={book.publisherName}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" value={book.price}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Book Status</Form.Label>
                    <Form.Select name="bookStatus" value={book.bookStatus} >
                        <option value='First Hand'>First Hand</option>
                        <option value='Second Hand'>Second Hand</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Select name="language" value={book.language} >
                        <option value='English'>English</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Nepali'>Nepali</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name="quantity" value={book.quantity}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Isbn No</Form.Label>
                    <Form.Control type="text" name="isbnNo" value={book.isbnNo}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" name="bookImage"  />
                </Form.Group>
                <Button variant='outline-primary' class="" onClick={goToBook}>Back</Button>
            </Form>
        </div>
    )
}

export default ViewBook;