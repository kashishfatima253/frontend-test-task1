import data from "../../constants/images/data"
import './styles.css'

const Navbar = () => {
  return (
    <div className="navbar-div">
        <div className="nav-logo">
            <img src={data.ps5Logo} alt=""/>
            
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Community</li>
            <li>Store</li>
        </ul>

        <div className="buttons">
            <button type="" className="btn login-btn">Login</button>
            <button type="" className="btn play-btn">Play</button>
        </div>
    </div>
  )
}

export default Navbar
