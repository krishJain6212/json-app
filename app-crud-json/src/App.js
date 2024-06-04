import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import React, { Suspense } from 'react';
import Preloader from "./Preloader";
const Home = React.lazy(()=> import('./Home'));
const Adduser = React.lazy(()=> import('./Adduser'));
const ViewUser = React.lazy(()=> import('./View'));
const EditUser = React.lazy(()=> import('./EditUser'));

function App() {
  return (
  <>
    <div className="App"><BrowserRouter>
    <Link to="/Home">
     <span className='fs-3 btn btn-info px-4 rounded-pill mt-3'>Home</span>
     </Link>
     <Routes>
      <Route path='/Home' element={
        <Suspense fallback={<Preloader/>}>
          <Home/>
        </Suspense>
      }></Route>
      <Route path='/User' element={ <Suspense fallback={<Preloader/>}>
          <Adduser/>
        </Suspense>}></Route>
      <Route path='/View/:vId' element={ <Suspense fallback={<Preloader/>}>
          <ViewUser/>
        </Suspense>}></Route>
      <Route path='/Edit/:eId' element={ <Suspense fallback={<Preloader/>}>
          <EditUser/>
        </Suspense>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
   <Outlet/>
   </>
  );
}

export default App;
