import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'

let autoId = 0
function App() {
  
const [cancion, setCancion] = useState('')
const [artista, setArtista] = useState('')
const [error, setError] = useState('')
const [array, setArray] = useState([])




const handleChangeArtista = (e) => {
  setArtista(e.target.value)
}

const handleChangeCancion = (e) => {
  setCancion(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(artista.trim().length < 3 || artista.trim()===''){
    setError('El campo artista debe tener mas de 3 caracteres y no estar vacio')
    return 
  }
  if(cancion.trim().length < 6){
    setError('La cancion es muy corta')
    return
  }
  else{
    setArray([...array,{artista, cancion, id:autoId++}])
    setArtista('')
    setCancion('')
    setError('')
  }
}


  return (
    <>
      <section>
        <h1>MIS TARJETAS MUSICALES</h1>
        <h5>Ingresa el nombre de tu artista favorit@ y la cancion que te gusta de el/ella. Quedara guardado en una card. </h5>
        <form className="form" onSubmit={handleSubmit} >
          <ul>
            <label htmlFor="artista"> Artista: </label>
            <input  
                  type="text" 
                  id='artista'
                  value={artista}
                  onChange={handleChangeArtista}
                  placeholder='Ej. Maria becerra'
                  />
          </ul>
          <ul>
            <label htmlFor="cancion"> Cancion: </label>
            <input 
                  type="text" 
                  id="cancion" 
                  value={cancion} 
                  onChange={handleChangeCancion}
                  placeholder='Ej. Automatico'/>
          </ul>
          <button type='submit'> ENVIAR </button>
        </form>
        {error ? <p>{error}</p> : <Card array = {array} setArray={setArray}/>}
      </section>
    </>
  )
}

export default App












// estados - handlers - formulario - cuerpo - label - imputs y despues el componente
