import React from "react";
import { List } from "../components/List";
// import { Footer } from "../compontens/Footer";
const Layout = ({ children }) => {
  // function del scroul
  const handleScroull = () => {
    const position = window.pageYOffsett;
  };
  return (
    <>
      <List />
      {children}

      {/* <Footer /> */}
    </>
  );
};
export { Layout };
