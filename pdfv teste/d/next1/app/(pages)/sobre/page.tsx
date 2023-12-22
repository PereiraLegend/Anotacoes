import MenuSbar from "../../Components/menuSbar"
import Footer from "../../Components/footer"

export default function Sobre(){
    return (
        <div>
            <MenuSbar/>
            <div className="bg-black w-[100%] h-[800px] text-white p-20 text-2xl">
                <h1 className="text-3xl">Sobre a Moda:</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur repellat, rem quaerat asperiores autem sed exercitationem nihil nostrum eos tempora minima quis minus eligendi, impedit non magni quam error debitis!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quasi odio corporis reiciendis molestias. Veniam expedita cumque a nobis adipisci ipsa, aut saepe placeat commodi natus veritatis dicta? Esse, omnis?</p>
            </div>
            <Footer/>
        </div>
    )
}