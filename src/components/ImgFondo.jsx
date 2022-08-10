import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/img/img3.jpg";
import imgVidio from "../assets/img/imgvideo.jpg";
import { Containes, BoxText, BoxDiv } from "../assets/styled/Video";
import { Link } from "react-router-dom";
// import video from "../assets/img/video.mp4";
// import imgVidio from "../assets/img/imgvideo.jpg";
const ImgFondo = () => {
  return (
    <>
      <Containes>
        <Row>
          <Col sm={12}>
            <img src={imgVidio} className="video" alt="video" />
          </Col>
        </Row>
      </Containes>
      <BoxText>
        <Container>
          <Row>
            <Col sm={5} md={4} lg={4} xl={4} className=" text-center">
              <img src={img} alf="imagen" />
              <video className="video" src=""></video>
            </Col>
            <Col sm={7} md={8} lg={8} xl={8}>
              <BoxDiv className=" text-center">
                <h2>Codifico en JavaScript, Html, Css, Bootstrap, React.JS</h2>

                <p>Hare tu sitio web, personalizado...</p>

                <Link className="btn btn-success text-light" to="/*">
                  Contacto
                </Link>
              </BoxDiv>
            </Col>
          </Row>
        </Container>
      </BoxText>
    </>
  );
};

export { ImgFondo };
