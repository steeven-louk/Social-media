import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';

function Footer(){
  return(
    <>
      <p style={ {'textAlign':'center','color':'#9a9a9a', 'fontWeight':'bold', 'marginTop':'5em'} }> &copy;Copyright 2022 -Easy Tuto - Clone</p>
    </>
  )
}

function App() {

  const getLocalStorage =JSON.parse(localStorage.getItem('theme'));

  const [Theme, setTheme] = useState(getLocalStorage);

  localStorage.setItem('theme', JSON.stringify(Theme));

  return (
    <div className={!getLocalStorage ? "App" : "App dark-theme"}>
      <Navbar theme={getLocalStorage} setTheme={setTheme} />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
