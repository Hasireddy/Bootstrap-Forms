import React from "react";
import './App.css';
// import Form from "./forms.js";
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     <Navbar/>
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;
