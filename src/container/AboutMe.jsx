import React from "react";
import { Link } from "react-router-dom";
import mogicon from "../assets/img/mojicon2.jpeg";
const AboutMe = () => {
  return (
    <>
      <div className="container bg-whiter">
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
      </div>
    </>
  );
};

export { AboutMe };
