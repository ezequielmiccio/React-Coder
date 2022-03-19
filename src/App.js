// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react'
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <ItemListContainer greeting={'Hola Coder'}/>
      <ItemCount initial={1} stock={20} onAdd={onAdd}/>
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
