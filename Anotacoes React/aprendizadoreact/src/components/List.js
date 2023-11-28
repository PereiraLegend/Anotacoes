// Para a renderização de listas
const List = () => {
    const items = [
        {
        id:1,
        name:"Laiz",
        },
        {
            id:2,
            name:"Maria",
        },
        {
            id:3,
            name:"Paulo"
        }
    ]

    return (
        <div>
            {/**Aqui eu utilizarei map, que chama a todos  */}
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}

        </div>
    )
}

export default List