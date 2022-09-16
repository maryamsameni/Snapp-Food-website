import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import App from './pages/App'
import About from './pages/About'
import Rules from './pages/Rules'
import Privacypolicy from './pages/Privacypolicy'
import Contact from './pages/Contact'


export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='App' element={<App />} />
          <Route path='About' element={<About />} />
          <Route path='Rules' element={<Rules />} />
          <Route path='Privacypolicy' element={<Privacypolicy />} />
          <Route path='Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Main />);

