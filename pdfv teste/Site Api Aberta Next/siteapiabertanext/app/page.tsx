"use client"
import './styles/all.modules.css';
import './styles/App.modules.css'
import MenuSbar from './components/menuSbar';
import MenuLbar from './components/menuLbar';
import Footer from './components/footerBar';
import Introducao from './components/introducao';
function App() {
  return (
      <div className='app-container'>
        <MenuSbar />

        <div className='al-corpo-pagina'>
          <div className='menulbaral'>
            <MenuLbar />
          </div>
          <div className='conteudo'>
            <Introducao/>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App