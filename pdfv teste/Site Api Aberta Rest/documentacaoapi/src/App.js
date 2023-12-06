import './css/App.css';
import MenuSbar from './components/menuSbar.js';
import MenuLbar from './components/menuLbar';
import Footer from './components/footerBar.js';
import Introducao from './components/introducao.js';
import SiteGet from './pages/siteGet.js';
import SitePost from './pages/sitePost.js';
import SitePut from './pages/sitePut.js';
import SiteDelete from './pages/siteDelete.js';
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
                <Route path='/siteget' element={<SiteGet/>} />
                <Route path='/sitepost' element={<SitePost/>}/>
                <Route path='/siteput' element={<SitePut/>}/>
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
