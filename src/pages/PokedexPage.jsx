import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import { useState } from "react"
import SelectType from "../components/PokedexPage/SelectType"

const PokedexPage = () => {

  const [inputValue, setinputValue] = useState('')
  const [selectValue, setSetselectValue] = useState('allPokemons')

  const trainerName= useSelector(store => store.trainerName ) 

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0'

  const [ pokemons, getPokemons, getByTypePokemons ] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons'){
      getPokemons()
    }else{
      getByTypePokemons(selectValue)
    }
    
  }, [selectValue])

  const inputSearch = useRef()

  const handlesubmit = e =>  {
    e.preventDefault()
    setinputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    //filtro por nombre en el input
    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }

  return (
    <div className="padre">
      <header className="header">
        <img className="logo" src="image12.png" alt="" />
      </header>
      <div className="linea"></div>
      <p className="welcome"><span className="color__welcome">Welcome { trainerName}</span>, here you can find your favorite pokemon. Let`s go</p>
      <div className="bloque__2">
          <form className="search"  onSubmit={handlesubmit}>
            <input className="input" ref={inputSearch} type="text" />
            <button className="btn">Search</button>
          </form>
        
          <div className="types">
            <SelectType 
              setSetselectValue= {setSetselectValue}
            />
          </div>
      </div>
        <div className="bloque__pokemons">
          {
            pokemons?.results.filter(cbFilter).map( poke => (
              <PokeCard 
                key = {poke.url}
                url = {poke.url}
              />
            ))
          }
        </div>
     
    </div>
  )
}

export default PokedexPage