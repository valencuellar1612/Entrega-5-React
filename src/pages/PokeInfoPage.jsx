import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/PokeInfoPage/styles/PokeInfoCard.css'

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  },[])

  console.log(pokemon);

  const firstType = pokemon?.types[0].type.name
  const firstType1 = pokemon?.types.map(infoTypes => {infoTypes.type.name})

  return (
    <div className="infoPage">
      <header className="header">
        <img className="logo" src="image12.png" alt="" />
      </header>
      <div className="linea"></div>
      <article className="card__info_1">
        <header className={`poke__header1 ${firstType}-gradient`}>
          <img className="poke__image1" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <h2 className={`poke__id ${firstType}-color`}>#{pokemon?.id}</h2>
        <h2 className={`poke__name1 ${firstType}-color`}>{pokemon?.name}</h2>
        <ul className="poke__caract">
          <li className="poke__weight">
            <span className="poke__weight_name">Weight</span>
            <span className="poke__weight_value">{pokemon?.weight}</span> 
             </li>
          <li className="poke__weight">
             <span className="poke__weight_name">Height</span>
             <span className="poke__weight_value">{pokemon?.height}</span>
             </li>
        </ul>
        <div className="poke__bloque_2">
          <ul className="poke__types">
            <h2 className="poke__bloque_title">Type</h2>
            <div className="poke__bloque_name1">
            {
              pokemon?.types.map(infoType => (
                <li className={`poke__bloque_info ${infoType.type.name}-back`} key={infoType.type.url}>{infoType.type.name}</li>
              ))
            }
            </div>
          </ul>
          <ul className="poke__skills">
          <h2 className="poke__bloque_title" >Skills</h2>
            <div className="poke__bloque_name">
            {
              pokemon?.abilities.map(infoAbilities => (
                <li className="poke__bloque_info1"  key={infoAbilities.ability.url}>{infoAbilities.ability.name}</li>
              ))
            }
            </div>
          </ul>
        </div>
        <div  className="poke__stats">
          <h2 className="poke__stats_title">Stats</h2>
          <ul >
            <div className="poke__stats_container">
            <li className="poke__stats_name">{pokemon?.stats[0].stat.name}:</li>
            <li className="poke__stats_value">{pokemon?.stats[0].base_stat}/150</li>
            </div>
            <div className="poke__container">
              <div className="poke__valor"></div>
            </div>
            <div className="poke__stats_container">
              <li className="poke__stats_name">{pokemon?.stats[1].stat.name}:</li>
              <li className="poke__stats_value">{pokemon?.stats[1].base_stat}/150</li>
            </div>
            <div className="poke__container">
              <div className="poke__valor2"></div>
            </div>
            <div className="poke__stats_container">
              <li className="poke__stats_name">{pokemon?.stats[2].stat.name}:</li>
              <li className="poke__stats_value">{pokemon?.stats[2].base_stat}/150</li>
            </div>
            <div className="poke__container">
              <div className="poke__valor3"></div>
            </div>
            <div className="poke__stats_container">
              <li className="poke__stats_name">{pokemon?.stats[5].stat.name}:</li>
              <li className="poke__stats_value">{pokemon?.stats[5].base_stat}/150</li>
            </div>
            <div className="poke__container">
              <div className="poke__valor4"></div>
            </div>
          </ul>
        </div>
      </article>
      <article className="card__info_2">
      <h2 className="poke__moves_title">Movements</h2>
        <ul className="poke__moves">
          {
            pokemon?.moves.map(infoMoves => (
              <li className="poke__moves_name" key={infoMoves.move.url}>{infoMoves.move.name}</li>
            ))
          }
        </ul>
      </article>
    </div>
  )
}

export default PokeInfoPage