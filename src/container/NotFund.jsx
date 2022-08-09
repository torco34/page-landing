import React from "react";
import { Link } from "react-router-dom";
const NotFund = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col align-self-center">
            <br />
            <br />
            <h2 className="text-danger  text-center m-5  ">
              Lo siento no tengo mas infomacion para ti
            </h2>
            <br />
            <p className="text-success  text-center m-5 ">
              ! Este pagina esta Proceso...{" "}
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
export { NotFund };
