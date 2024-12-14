import { Container, Carousel } from "react-bootstrap";
// import nature1 from "../../public/images/nature11.jpg";
// import nature2 from "../../public/nature22.jpg";
// import nature3 from "../../public/nature33.jpg";
// import nature4 from "../../public/nature44.jpg";
import nature1 from "../assets/nature11.jpg"
import nature2 from "../assets/nature22.jpg"
import nature3 from "../assets/nature33.jpg"
import nature4 from "../assets/nature44.jpg"

function NavBar() {
  return (
    <Container className="mt-5">
      {/* <h1>This is Home Page</h1> */}
      <Carousel fade>
        <Carousel.Item>
          <img src={ nature1 } className="d-block w-100 h-50"></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>this is first image</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={nature2} className="d-block w-100 h-50"></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>this is second image</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={nature3} className="d-block w-100 h-50"></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>this is Third image</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={nature4} className="d-block w-100 h-50"></img>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>this is Fourth image</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default NavBar
