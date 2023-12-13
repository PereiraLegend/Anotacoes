"use client"
import '../../styles/all.modules.css';
import '../../styles/App.modules.css'
import '../../styles/sub-paginas.modules.css';
import MenuSbar from '../../components/menuSbar';
import MenuLbar from '../../components/menuLbar';
import Footer from '../../components/footerBar';
import Delete from '../../components/siteDelete';
function App() {
  return (
      <div className='app-container'>
        <MenuSbar />

        <div className='al-corpo-pagina'>
          <div className='menulbaral'>
            <MenuLbar />
          </div>
          <div className='conteudo'>
            <Delete/>
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App