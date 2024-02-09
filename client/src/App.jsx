import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import FAQ from './pages/FAQ/FAQ';
import Website from './pages/Website';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import About from './pages/About/About';
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Website/>}/>
              <Route path='/FAQ' element={<FAQ/>}/>
              <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>
              <Route path='/about' element={<About/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
    </>
  );
}

export default App;
