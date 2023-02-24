import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <>
        <Outlet></Outlet>
      </>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
