import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import sue from "../assets/img/sue.png";
import rosa from "../assets/img/rosa.png";
import refugio from "../assets/img/refugio.png";
import app from "../assets/img/ros.png";
import {
  BoxCarousel,
  BoxFather,
  CarouselText,
  Boxh5,
} from "../assets/styled/Carousel";

function Carousele() {
  return (
    <>
      <BoxFather>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <BoxCarousel>
                <h3 className="text-center text-success">Proyectos</h3>
                <Carousel fade className="container container-carusel  ">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={sue}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={refugio}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={rosa}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={app}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </BoxCarousel>
            </Col>
            <Col sm={12} md={6}>
              <CarouselText>
                <h3 className="text-center text-success">Mis Herramientas</h3>
                <Boxh5 className="p-5  text-white ">
                  <p>
                    <span className="text-success"> HTML5: </span> &nbsp; define
                    la estructura del contenido web.
                  </p>
                  <p>
                    <span className="text-success"> CSS3: </span> &nbsp; diseño
                    y presentación de las páginas web.
                  </p>
                  <p>
                    <span className="text-success"> Bootstrap:</span> &nbsp;
                    para la creación de interfaces limpias y con un diseño
                    responsive.
                  </p>
                  <p>
                    <span className="text-success"> JavaScript:</span>&nbsp;
                    para añadir características la web.
                  </p>
                  <p>
                    <span className="text-success">ReactJS :</span> &nbsp; para
                    renderizar de manera eficiente la pagina web
                  </p>
                </Boxh5>
              </CarouselText>
            </Col>
          </Row>
        </Container>
      </BoxFather>
    </>
  );
}

export { Carousele };
