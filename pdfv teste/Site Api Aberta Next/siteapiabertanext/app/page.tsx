"use client"
import './styles/all.modules.css';
import './styles/App.modules.css'
import MenuSbar from './components/menuSbar';
import MenuLbar from './components/menuLbar';
import Footer from './components/footerBar';
import Introducao from './components/introducao';
import SiteDelete from '../app/components/siteDelete';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <MenuSbar />

        <div className='al-corpo-pagina'>
          <div className='menulbaral'>
            <MenuLbar />
          </div>
          <div className='conteudo'>
              <Routes>
                <Route path='/' element={<Introducao/>} />
                <Route path='/sitedelete' element={<SiteDelete/>}/>
              </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;