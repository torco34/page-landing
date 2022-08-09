import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./container/Layout";
import { Home } from "./container/Home";
import { Jod } from "./container/Jod";
import { AboutMe } from "./container/AboutMe";
import { NotFund } from "./container/NotFund";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jod" element={<Jod />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="*" element={<NotFund />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export { App };
