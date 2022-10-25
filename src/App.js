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
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
