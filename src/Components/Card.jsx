import './Card.modules.css'

export function Card ({array, setArray}){

    const emoticon1 = '\u{1F483}'
    const emoticon2 = '\u{1F447}'

    const handleEliminar = (id) => {
        const newArray = array.filter((valor)=>valor.id !== id)
        setArray(newArray)
    }

    return(
        <div className="formCard">
            {array.map((item)=> (
            <ul className='ulStyle'>
            <li key={item.id}  >
            <h2 className='formCard-text'>Tarjetas musicales: {emoticon2}</h2>
            <h3 className='formCard-text'>El/la artista ingresad@ es: {item.artista}</h3>
            <h3 className='formCard-text'>La cancion que ingresaste es: {item.cancion}</h3>  
            <h5 className='formCard-text'>WOW! Me encanta esa cancion! Bailamos? {emoticon1}</h5>          
            <button onClick={()=>handleEliminar(item.id)} className="formCard-delete"> ELIMINAR </button>
            </li>
            </ul>
            ))}
        </div>

    )

}