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
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
