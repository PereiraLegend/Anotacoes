export default function Cards(){
    return (
        <div className="w-[] hover:backdrop-blur group">
            <div className="bg-blue-200 w-[250px] h-[300px] m-2 cursor-pointer ">
                <div className="w-[100%] h-[250px]">
                    <img className="w-[100%] h-[100%]" src="imgs/modelo1.jpg" alt=""/>
                </div>
                <div>
                    Conjunto Short e Camisa 
                </div>
                <div>
                    Preço: R$ 200,00
                </div>
            </div>
        </div>
    )
}