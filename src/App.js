// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="AboutTextUtils" /> */}
      {/* <Navbar/> */}
    <BrowserRouter>
    {/* users --> Component 1 
    /users/home --> Component 2 */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter The Text To Analyze Below!!" mode={mode}/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  </>
);
}

export default App;
