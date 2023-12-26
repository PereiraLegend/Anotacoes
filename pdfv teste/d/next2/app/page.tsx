import MenuSbar from "./components/menuSbar"

export default function Home() {
  return (
    <div className="bg-[url('movel1.jpg')] bg-no-repeat">
      <MenuSbar/>
      <div className="w-[100%] h-[600px]">
        <div className="ml-[5%] w-[45%] text-white">
          <div className="text-7xl font-serif space-y-7 mt-6">Possuimos as <span className="text-yellow-600">M</span>elhores <span className="text-yellow-600">M</span>obílias do <span className="text-yellow-600">M</span>ercado</div>
          <div className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati neque vitae, beatae architecto debitis vero similique, illum et ea veniam, repellat eligendi excepturi nulla maxime. Reiciendis maxime corporis ipsam officia.</div>
          <div className="w-[200px] bg-yellow-600 p-5 mt-5 flex justify-center font-serif text-xl hover:cursor-pointer hover:border-2">Explore</div>
        </div>
      </div>
    </div>
  ) 
}
