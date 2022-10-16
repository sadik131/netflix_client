import {  Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Nav from './Component/Nav';
import './App.css';
import Artical from './Component/Artical';
import Primian_artical from './Component/Primian_artical';

function App() {
  return (
    <div>
    <Nav></Nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/artical' element={<Artical></Artical>}></Route>
      <Route path='/primiam' element={<Primian_artical></Primian_artical>}></Route>
    </Routes>
  </div>
  );
}

export default App;
