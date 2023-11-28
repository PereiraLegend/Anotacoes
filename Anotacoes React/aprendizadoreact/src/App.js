import './App.css';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2-hierarquia';
import Imagens from './components/Imagens';
import Hoks from './components/Hoks'
import List from './components/List'
import Rendercomd from './components/Rendercomd';
import Fragmentos from './components/Fragmentos';
import Container from './components/Container';

function App() {
  return ( // Para importar um outro componente criado eu o passo como uma tag html, <Componente1 />
    <div className="App">
      <h1>Olá React, Olá Mundo!</h1>
      <Componente1 /> {/** Está aparecendo tudo centralizado porque essa tag está herdando o alinhamento da classe app */}
      <Componente2 />
      <Imagens />
      <Hoks />
      <List />
      <Rendercomd x={5} y={3}/>
      <Fragmentos/>
      <Container> {/**Aqui estou utilizando o container como uma tag, mas para utilizar isso é necessário utilizar "children" */}
        <h1>Este é o filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
