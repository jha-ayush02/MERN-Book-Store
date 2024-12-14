import { useEffect } from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
// import book1 from "../../public/book11.jpg";
// import nature1 from "../../public/nature11.jpg";
// import nature2 from "../../public/nature22.jpg";
// import nature3 from "../../public/nature33.jpg";
// import nature4 from "../../public/nature44.jpg";
function Home() {
  let [books, setBooks] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "get",
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={book.bookImage}
                height="200px"
                width="200px"
              ></Card.Img>
              <Card.Body>
                <Card.Title>
                  {book.bookName}
                  <br></br>
                  {book.description}
                </Card.Title>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </div>    
  );
}

export default Home;
