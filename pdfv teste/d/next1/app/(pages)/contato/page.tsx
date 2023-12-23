import MenuSbar from "../../Components/menuSbar"
import Footer from "../../Components/footer"

export default function Contatos(){
    return(
        <div>
            <MenuSbar/>
            <div className="bg-black text-white">
                <div className="text-3xl flex justify-center p-10">Inscreva-se e receba as nossas atualizações via email</div>
                <div className="flex justify-center">
                    <div className="text-xl">
                        <div className="flex justify-between mb-5">
                            <div>Nome:</div>
                            <input className="text-black" type="text" />
                        </div>
                        <div className="flex justify-between mb-5">
                            <div>Email:</div>
                            <input className="text-black" type="text" />
                        </div>
                        <div className="mb-10">
                            <div>Fale conosco:</div>
                            <textarea name="" id="" cols="30" rows="10" className="text-black"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}