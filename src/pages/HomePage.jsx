import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../components/HomePage/HomePage.css'

const HomePage = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="homePage">
      <div className="homePage_1">
      <img className="home__title" src="imageportada.png" alt="" />
        <h2 className="home__welcom">¡Hi Trainer!</h2>
        <p className="home__p">To start, plase give me you trainer name</p>
        <form className="home__form" onSubmit={handleSubmit}>
            <input className="home__input" ref={inputName} type="text" />
            <button className="home__btn">Catch them all!</button>
        </form>
      </div>
      <div className="homePage_2">
        <div className="home__linea"></div>
        <div className="home__linea2"></div>
      </div>
    </div>
  )
}

export default HomePage