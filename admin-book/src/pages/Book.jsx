import { useNavigate } from "react-router-dom"
import { Button, Container, Table, Form, Pagination } from 'react-bootstrap'
import { useEffect, useState } from "react"
import axios from "axios"

function Book() {
  let [books, setbooks] = useState([]);
  let [isDelete, setDelete] = useState(false);
  let [searchBook, setSearchBook] = useState('');
  let [pageNo, setPageNo] = useState(1);
  let [nop, setNop] = useState(3);
  function setPage(n) {
    // alert(n);
    setPageNo(n);
  }

  let items = [];
  for (let number = 1; number <= nop; number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => setPage(number)} >
        {number}
      </Pagination.Item>,
    );
  }

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/books',
      method: 'GET',
      params: {
        search: searchBook,
        page: pageNo,
        limit: 3,
      }
    }).then((res) => {
      console.log(res);
      setbooks(res.data.data);
      setNop(Math.ceil((res.data.totalCounts) / 3));
    }).catch((err) => {
      console.log(err)
    })
  }, [isDelete, searchBook, pageNo])

  const navigate = useNavigate()
  function addBookRoute() {
    navigate('/add/book')
  }

  function gotoEditBook(id) {
    navigate('/edit/book/' + id);
  }

  function gotoViewBooks() {
    navigate('/view/books')
  }

  function deletebook(id) {
    alert(id);
    axios({
      url: 'http://localhost:3000/delete/book/' + id,
      method: 'DELETE'
    }).then((res) => {
      console.log(res);
      setDelete(true) // This will trigger useEffect again to fetch updated data from server
      setbooks(books.filter(book => book._id !== id))
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    // <h1>This will  be a book list</h1>
    <Container >
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter book name to search" onChange={(e) => { setSearchBook(e.target.value) }} />
        </Form.Group>
      </Form>

      <Button variant="dark" onClick={addBookRoute} style={{ display: 'flex', float: 'right', marginBottom: '5px' }} >Add Book</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Book Image</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Language</th>
            <th>Quantity</th>
            <th>ISBN NO</th>
            <th style={{textAlign: 'center'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td><img src={book.bookImage} height='50px' width='50px'></img></td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.price}</td>
              <td>{book.language}</td>
              <td>{book.quantity}</td>
              <td>{book.isbnNo}</td>
              <td>
                {/* <Button variant="outline-info" size='sm' className='me-4' onClick={() => gotoViewBooks()}>
                  <img src="/images/view_icon.png" className=""></img>
                </Button> */}
                <Button variant="outline-warning" size='sm' className='me-4' onClick={() => gotoEditBook(book._id)}> 
                  <img src="/images/edit_icon.png" className=""></img>
                </Button>
                <Button variant="outline-danger" size='sm' onClick={() => deletebook(book._id)}> 
                  <img src="/images/delete_icon.svg" className=""></img>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination size="md" >{items}</Pagination>
      </div>
    </Container>
  )
}
export default Book

