// import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './page/Login';
import SignUp from './page/SignUp';
import Dashboard from './page/Dashboard';
import CandidateForm from './page/CandidateForm';
import AboutUs from './page/AboutUs';
import Voting from './page/Voting';
import Result from './page/Result';


function App() {
  return (
    <div>
      <BrowserRouter>
           <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='SignUp' element={<SignUp/>}></Route>
              <Route path='Dashboard' element={<Dashboard/>}></Route>
              <Route path='CandidateForm' element={<CandidateForm/>}></Route>
              <Route path='AboutUs' element={<AboutUs/>}></Route>
              <Route path='Voting' element={<Voting/>}></Route>
              <Route path='Result' element={<Result/>}></Route>
              
           </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
