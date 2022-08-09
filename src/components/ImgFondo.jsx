import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../assets/img/img3.jpg";
import imgVidio from "../assets/img/imgvideo.jpg";
import { Containes, BoxText, BoxDiv } from "../assets/styled/Video";
import { Link } from "react-router-dom";
import video from "../assets/img/video.mp4";
const ImgFondo = () => {
  return (
    <>
      <Containes>
        {/* <img src={imgVidio} className="video" alt="video" /> */}
        <video className="video" src={video} autoPlay loop muted />
      </Containes>
      <BoxText>
        <Container>
          <Row>
            <Col sm={4} className=" text-center">
              <img src={img} alf="imagen" />
              <video className="video" src=""></video>
            </Col>
            <Col sm={8}>
              <BoxDiv className=" ">
                <h2>
                  Codifico en JavaScript, Html, <br></br>Css, Bootstrap, React
                  Native
                </h2>

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
