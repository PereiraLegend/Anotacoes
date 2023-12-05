import './css/App.css';
import MenuSbar from './components/menuSbar.js';
import MenuLbar from './components/menuLbar';
import Footer from './components/footerBar.js';
import Introducao from './components/introducao.js';

function App() {
  return (
    <div className='app-container'>
      <MenuSbar />

      <div className='al-corpo-pagina'>
        <div className='menulbaral'>
          <MenuLbar />
        </div>
        <div className='conteudo'>
          <Introducao />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
