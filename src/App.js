// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import Avatar from './components/Avatar/Avatar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ClassCount from "./components/ClassCount/ClassCount";
import FunctionCounter from "./components/FunctionCounter/FunctionCounter";




function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>{show ? 'No mostrar' : 'Mostrar'}</button>
      {show ? <FunctionCounter initial={1}/> : null}
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
