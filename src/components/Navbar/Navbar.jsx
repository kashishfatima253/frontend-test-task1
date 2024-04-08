import data from "../../constants/images/data"
import './styles.css'
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";


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
  const [openMenu, setOpenMenu] = useState(true)
  return (
    <div className={(openMenu ? "navbar-div" : "hide-nav") }>
        <div className="nav-logo">
            <img src={data.ps5Logo} alt=""/>
            <button className="menu-button" onClick={()=>{setOpenMenu((prev)=>!prev)}}>
              <IoMenu fontSize={30}/>
            </button>
        </div>

        <ul className={(openMenu ? "desktop-nav-ul" : "mobile-nav-ul") }>
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

        <div className={(openMenu ? "buttons" : "mobile-nav-ul") }>
            <button type="" className="btn login-btn">Login</button>
            <button type="" className="btn play-btn">Play</button>
        </div>

       
            

           
    </div>
  )
}

export default Navbar
