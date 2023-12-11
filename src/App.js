import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {

  const[mode,setMode]=useState('light')
    const[alert,setAlert]=useState(null)
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);

    }
    const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#053259';
        showAlert("Dark mode has benn enabled","success")
        document.title="Text Utils Dark Mode"
      }else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light mode has benn enabled","success")
        
        document.title="Text Utils Light Mode"
      }
    }


  return (
    <>
    <Navbar title="TextUtility" aboutText="About" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
    <div className="container my-5">
     <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
     </div>
    </>
  );
}

export default App;
