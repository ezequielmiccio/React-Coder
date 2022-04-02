import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const handleKeyDown = (e) => {
    if((e.key == 'a' && e.key == 'b') || e.key == 'e' || e.key == 'i' || e.key == 'o' || e.key == 'u') {
      e.preventDefault()
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <button onClick={(e) => console.log(e.nativeEvent)}>Boton</button>
        <input onKeyDown={handleKeyDown}/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Hola Coder'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Hola Coder'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//React.createElement('Avatar', { className: "Avatar" }, [])

export default App;
