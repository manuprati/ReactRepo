import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light') //whether darkMode is ena
  const toggleMode = () => {
    if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
    }
  else {
  setMode('light')
  document.body.style.backgroundColor='white'
}}
  return (
    <>

{/* <Navbar title="TextUtils" AboutText="About TextUtils" /> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
{/* <About /> */}
</div>

    </> 
  );
}

export default App;
