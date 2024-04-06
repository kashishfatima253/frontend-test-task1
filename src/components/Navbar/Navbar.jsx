import data from "../../constants/images/data"
import './styles.css'
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id:1,
    link:'Home'
  },
  {
    id:2,
    link:'About'
  },
  {
    id:3,
    link:'Community'
  },
  {
    id:4,
    link:'Store'
  },
]

const Navbar = () => {

  return (
    <div className="navbar-div">
        <div className="nav-logo">
            <img src={data.ps5Logo} alt=""/>
            
        </div>

        <ul>
            {
              navLinks.map((navLink)=>{
                return(
                  <li key={navLink.id} className="nav-li">
                    <NavLink to={navLink.link==='Home' ? '/' : navLink.link } 
                    className={({ isActive}) =>
                      isActive ? 'is-active' : 'navlink'
                    }
                    >{navLink.link}</NavLink>

                  </li>
                )
              })
            }
        </ul>

        <div className="buttons">
            <button type="" className="btn login-btn">Login</button>
            <button type="" className="btn play-btn">Play</button>
        </div>
    </div>
  )
}

export default Navbar
