import { useEffect, useState } from 'react'
import './App.css'
import data from './constants/images/data'
import Navbar from './components/Navbar/Navbar'
import Feature from './components/Feature/Feature'
const features = [
  "Ergonomic Design",
  "Longer Battery Life",
  "Wireless Charging",
  "Two Tone Design",
  "3D Audio",
  "Additional Triggers"
]
function App() {
  const [controllerState, setControllerState] = useState(1)

  useEffect(()=>{
    console.log("aaa",controllerState)
  },[controllerState])

  const changeControllerState = () =>{
    if(controllerState === 3){
      setControllerState(1)
    }
    else{
      setControllerState(controllerState+1)
    }
  }
  return (
    <div className="main-section">
      <Navbar/>

      {
        controllerState === 1 ? 
        <h1 className={"heading first-heading"}>Are you ready to play the game?</h1>
        :
        controllerState === 2 ? 
        <h1 className={"heading"}>PlayStation 5 DualShock</h1>
        :
        <h1 className={"heading"}>Latest Technologies</h1>

      }

     { 
     controllerState === 1 ?
     <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>The next generation of players begins with a Play Station 5.</h4> 
     :
     controllerState === 2 ?
     <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>The future of gaming in your palm.</h4>
     :
     <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>Evolve your experience around.</h4>
     }

      <button onClick={changeControllerState} className={"text discover-button " + (controllerState>=2 && "remove-text")}>DISCOVER</button>

      <div className={"controller-div " + (controllerState>=2 && "controller-shift-up ")} onClick={changeControllerState}>
        <img className={"controller-div controller-img " + (controllerState===3 && "controller-shift-in ")} src={data.controller} alt="" />
      </div>
      <div className="page-number">
        <p className="num">0{controllerState}/03</p>
        
      </div>

      <div className={"left-div " + (controllerState>=2 && "side-div ")}></div>
      <div className={"right-div " + (controllerState>=2 && "side-div ")}></div>

      <div className="dots-div">
        <div className={"dot first " + (controllerState===1 && "bordered-dot")}></div>
        <div className={"dot second " + (controllerState===2 && "bordered-dot")}></div>
        <div className={"dot third " + (controllerState===3 && "bordered-dot")}></div>

      </div>

      <div className={"features " + (controllerState<3 && "fade-features")}>
      
        <div className="right">
        {
          features.slice(0,3).map((feature)=>{
            return(
              <Feature text = {feature}/>
            )
          })
        }
        </div>

        <div className="left">
        {
          features.slice(3,features.length).map((feature)=>{
            return(
              <div>

                <Feature className="feature-box" text = {feature}/>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
