import React from "react";
import { Link } from "react-router-dom";
import mogicon from "../assets/img/moticon.jpeg";
import { Container } from "../assets/styled/jod";
import video from "../assets/img/video.mp4";
const Jod = () => {
  return (
    <>
      <Container>
        <video className="video" src={video} autoPlay loop muted />
      </Container>
      {/* <div className="container bg-whiter">
      
      

        <div className="row align-items-start">
          <div className="col align-self-center">
            <br />
            <br />
            <div className="text-danger  text-center m-5">
              <img src={mogicon} alf="foto" />
              <h2 className="  ">Excuse me</h2>
            </div>

            <p className="text-success  text-center m-5 ">
              ! Este pagina esta Proceso...
              <Link className="btn btn-success" to="/">
                Atras
              </Link>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export { Jod };
