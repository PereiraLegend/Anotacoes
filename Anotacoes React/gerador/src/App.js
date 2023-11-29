import './css/App.css';
import { useState, useEffect } from 'react'// useState para controlar estados, useEffect para controlar ações/comportamentos
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs'
const API = "http://localhost:5000" // Aqui defino o link da api, mas geralmente isso é feito em outro arquivo


function App() {
  // Aqui defino os estados da aplicação
  const [title, setTitle] = useState("")
  const [tempo, setTempo] = useState("")
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  //Quero fazer os arquivos carregarem na página depois de a página ser recarregada, e para isso eu utilizo o useEffect
  useEffect(() => {
    const carregarDados = async () =>{
      setLoading(true)
      const res = await fetch(API + "/todos")
      .then((res) => res.json())
      .then((data) => data)
      .catch((erro)=> console.log(erro))
      setLoading(false) //Uma vez que tudo for carregado eu preciso 
      setTodos(res)
    }
    //Para testar :
    carregarDados()
  },[]) //Com a dependência "[]" vazia, ele vai ser executado quando a página recarregar

  const eventoFormulario = async (e) => { // O "e" dentro da função é o evento em si para entre outros não recarregar a página no envio do formulário
    e.preventDefault()
    console.log(title)
    console.log(tempo)
    console.log("Enviado!")
    //chamando todos os dados que foram salvos e os armazenando dentro de "todo"
    const todo = {
      id: Math.random(),
      title,
      tempo,
      done:false, //Aqui eu defino se ela, a tarefa está ou não pronta
    }
    console.log(todo)
    //Enviando dados para a Api // Para enviarmos usamos o rescurso nativo do javascript mesmo, o fetchApi
    await fetch(API + "/todos", { // Como eu estou passando para a api os valores, eu necessito colocar um async via de regra da api para fazer o servidor esperar, e um await aqui
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type":"application/json",
      },
    })
    // Quando eu insiro os dados eu preciso recarregar a página para ele mostrar lá enbaixo o dado que foi adicionado, para fazer isso de forma automática eu faço:
    setTodos((preverEstado) => [...preverEstado, todo]) // Com a ideia de preState ou preverEstado eu posso pegar o estado anterior do item que estou trabalhando, então eu consigo adicionar um item a um estado anterior e gerar um novo eestado

    //Deixando os inputs limpos:
    // Com o "setTitle" abaixo eu limpo o formulário, no caso estou passando o que acontece nele como "retorno", aqui eu digo para ele limpar o formulário
    setTitle("")
    setTempo("")
  }

  const deletarTarefa = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
      //Se eu deixar apenas essa parte de cima de "deletar" vai executar ok, contudo a tarefa não vai ser excluida do front-end, apenas se recarregar a página, e para contornar isso usamos:
    })
    setTodos((prevEstado) => prevEstado.filter((todo) => todo.id !== id))
  }
  const editarTarefa = async (todo) => {
    //Para alternar o estado da tarefa eu preciso ficar alternando durante o código, no caso do edit eu utilizo:
    todo.done = !todo.done

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type":"application/json",
      }
    })
    //Abaixo diferente do delete eu utilizo um map, e para retornar os dados de atualização eu preciso
    setTodos((prevStado) => prevStado.map((t) => (t.id  === data.id ? (t = data) : t)))
  }

  //Também posso criar um estado de loading
  if(loading){ //Aqui eu digo que se estiver carregando ele me retorna "Carregando..." para toda a página, uma forma de não deixar o usuário ocioso, como se algo não estivesse ok
    return <p>Carregando...</p>
  }

  return (
    <div className='App'>
      <div className='todo-header'>
        <h1>React Todo</h1>
      </div>
      <div className='form-todo'>
        <p>Formulário</p>
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={eventoFormulario}> {/** "on" para chamar um evento, o que está dentro (a função que está dentro) para passar a função que corresponde ao evento */}

          <div className='form-control'>
            <label htmlFor='title'> O que você vai fazer?</label>
            <input
              type='text'
              name='title'
              placeholder='Titulo da Tarefa' 
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            /> {/** Para captar os eventos de tecla eu utilizo o onchange */}
          </div>

          <div className='form-control'>
            <label htmlFor='tempo'>Duração</label>
            <input
              type='texto'
              name='tempo'
              placeholder='Tempo estimado'
              onChange={(e) => setTempo(e.target.value)}
              value={tempo || ""}
              required
            />
          </div>  
          
          <input type='submit' value="Criar Tarefa" /> {/** Como ao apertar o botão a página recarrega automática, o que vai contra o que o react prega, eu passa o prevent default como argumento de "e" */}
        </form>
      </div>
      <div className='list-todo'>
        <h2>Lista de Tarefas</h2>
        {/**Aqui em baixo eu pego o tamanho do array e comparo com 0, se for === a 0 ele exibe a mensagem desse array condicional */}
        {todos.length === 0 && <p>Não há tarefas</p>}
        {/**Preenchendo a lista de tarefas com o que foi salvo no banco de dados: */}
        {todos.map((todo) => (
          //Chamo a id e passo a chave unica do id:
          <div className='todo' key={todo.id}>
            {/**Aqui eu não só chamo a classe como coloco uma condicional para chamar o css caso a operação passe pela condicional */}
            <h3 className={todo.done ? "todo-done": ""}>{todo.title}</h3>
            <p>Duração: {todo.tempo}</p>
            <div className='actions'>
              {/**Dentro de span abaixo eu checo uma condicional para ver se a tarefa está pronta */}
              <span onClick={() => editarTarefa(todo)}>
                {!todo.done ? <BsBookmarkCheck/> : <BsBookmarkCheckFill/>}
              </span>
              {/**Para deletar a tarefa logo abaixo eu preciso passar uma arrow function como argumento, pois se não tiver quando o js ler essa parte ele vai sair deletando de forma automática */}
              <BsTrash onClick={() => deletarTarefa(todo.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
