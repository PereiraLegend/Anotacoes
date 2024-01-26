export default function Registro() {
    return (
        <div className="flex justify-center items-center w-[100%]">
        <div className="pt-[200px]">
          <div className="text-4xl m-2">Registro</div>
          <form action="" className="">
            <div className="m-2">
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="" id="" className="border-black border-2"/>
            </div>
            <div className="m-2">
              <label htmlFor="email">Email: </label>
              <input type="email" name="" id="" className="border-black border-2"/>
            </div>
            <div className="m-2">
              <label htmlFor="senha">Senha: </label>
              <input type="password" name="" id="" className="border-black border-2"/>
            </div>
            <button type="button" className="bg-gray-200 p-2 border-black border-2 ">Voltar</button>
            <button type="button" className="bg-gray-200 p-2 border-black border-2 ">Registrar</button>

          </form>

        </div>
      </div>
    )
}