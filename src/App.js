import './App.css';
import Login from './Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import DashboardOld from './Component/DashboardOld.jsx';
import Projects from './Component/Projects.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Footer from './Footer.jsx';
import Dashboard from './Component/Dashboard.jsx';
import { useEffect, HSStaticMethods, useLocation } from 'react';

function App() {
  // const token = localStorage.getItem('Token');

  // if(!token) {
  //   return <Login />
  // }
  // const location = useLocation();

  useEffect(() => {
    require('preline/preline');
  }, []);

  // useEffect(() => {
  //   // @ts-ignore
  //   HSStaticMethods.autoInit();
  // }, [location.pathname]);

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/oldDashboard' element={<DashboardOld />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
