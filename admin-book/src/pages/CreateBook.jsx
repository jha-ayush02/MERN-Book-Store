import { Form , Button, InputGroup, Dropdown, DropdownButton   } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBook() {
  const navigate=useNavigate();
  function addBook(){
    let data={
      bookName: bookName,
      authorName: authorName,
      description: description,
      publisherName: publisherName,
      bookStatus: bookStatus,
      price: price,
      language: language,
      quantity : quantity,
      isbnNo : isbnNo,
    }
    axios({
      url: 'http://localhost:3000/add/book',
      method: 'POST',
      data: data
    }).then((res)=> {
      navigate('/book')
    }).catch((err)=> {
      console.log(err)
    })
  }

  function returnToBook() {
    navigate('/book');
  }

  let [bookName,setBookName]=useState('')
  let [authorName,setAuthorName]=useState('')
  let [description,setDescription]=useState('')
  let [publisherName,setPublisherName]=useState('')
  let [price,setPrice]=useState(0)
  let [language,setLanguage]=useState('')
  let [quantity,setQuantity]=useState('')
  let [isbnNo,setIsbnNo]=useState('')

  return (
    //  <h1>This page  will be create a book</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Book Name" onChange={ (e)=>setBookName(e.target.value) } />
      </Form.Group>
      { bookName }
      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Author Name" onChange={ (e)=>setAuthorName(e.target.value) } />
      </Form.Group>
      { authorName }
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={ (e)=>setDescription(e.target.value) }/>
      </Form.Group>
      { description }
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control type="text" placeholder="Enter Publisher" onChange={ (e)=>setPublisherName(e.target.value) } />
      </Form.Group>
      { publisherName }

      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      { bookStatus }
      
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" onChange={ (e)=>setPrice(e.target.value) }/>
      </Form.Group>
      { price }
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control type="text" placeholder="Enter Language" onChange={ (e)=>setLanguage(e.target.value) }/>
      </Form.Group>
      { language }
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter quantity" onChange={ (e)=>setQuantity(e.target.value) }/>
      </Form.Group>
      { quantity }
      <Form.Group className="mb-3">
        <Form.Label>Isbn No</Form.Label>
        <Form.Control type="text" placeholder="Enter isbnNo" onChange={ (e)=>setIsbnNo(e.target.value) }/>
      </Form.Group>
      { isbnNo }
      <Button variant='outline-primary' onClick={ returnToBook }>Cancel</Button>
      <Button variant='outline-primary' onClick={addBook}>Add Book</Button>
    </Form>
    
  );
}

export default CreateBook;
