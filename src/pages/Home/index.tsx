import { Link } from "react-router-dom"
import { Section } from './styles'
import img1 from "../../assets/image1.jpeg"
import logo from "../../assets/logo.png"

export function Home() {
  return (
    <Section>
      <img src={img1} alt="IMG na esquerda" />
      <div className="container">
        <img src={logo} alt="logo" />
        <Link to="/login"><button> COMECE A APOSTAR </button></Link>
      </div>
    </Section>
  )
}
