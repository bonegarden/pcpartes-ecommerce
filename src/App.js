import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
      <NavBar>        
      </NavBar>      
      <ItemCount max={10} cont={1}/>
    </>
  );
}

export default App
