import './App.css';
import Login from './Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';

function App() {
  // const token = localStorage.getItem('Token');

  // if(!token) {
  //   return <Login />
  // }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
