import { useState } from 'react'

import data from '../../constants/images/data'
import Feature from '../../components/Feature/Feature'

const features = [
  {
    id:1,
    feature:"Ergonomic Design"
  },
  {
    id:2,
    feature:"Longer Battery Life",
  },
  {
    id:3,
    feature:"Wireless Charging",
  },
  {
    id:4,
    feature:"Two Tone Design",
  },
  {
    id:5,
    feature:"3D Audio",
  },
  {
    id:6,
    feature: "Additional Triggers"
  },
]

const Home = () => {
    const [controllerState, setControllerState] = useState(1)
  
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
      {/* Heading */}
        {
          controllerState === 1 ? 
          <h1 className={"heading first-heading"}>Are you ready to play the game?</h1>
          :
          controllerState === 2 ? 
          <h1 className={"heading"}>PlayStation 5 DualShock</h1>
          :
          <h1 className={"heading"}>Latest Technologies</h1>
        }
    {/* Tagline */}
       { 
       controllerState === 1 ?
       <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>The next generation of players begins with a Play Station 5.</h4> 
       :
       controllerState === 2 ?
       <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>The future of gaming in your palm.</h4>
       :
       <h4 className={"tagline text " + (controllerState>=2 && "replace-tagline")}>Evolve your experience around.</h4>
       }
        {/* Discover Button */}
        <button onClick={changeControllerState} className={"text discover-button " + (controllerState>=2 && "remove-text")}>DISCOVER</button>
  
       {/* Controller Image */}
        <div className={"controller-div " + (controllerState>=2 && "controller-shift-up ")} onClick={changeControllerState}>
          <img className={"controller-div controller-img " + (controllerState===3 && "controller-shift-in ")} src={data.controller} alt="" />
        </div>

        {/* Page Number */}
        <div className="page-number">
          <p className="num">0{controllerState}/03</p>
          
        </div>
  
       {/* Side transition rectangles */}
        <div className={"left-div " + (controllerState>=2 && "side-div ")}></div>
        <div className={"right-div " + (controllerState>=2 && "side-div ")}></div>
  
       {/* Carousel dots */}
        <div className="dots-div">
          <div className={"dot first " + (controllerState===1 && "bordered-dot")} onClick={()=>{setControllerState(1)}}></div>
          <div className={"dot second " + (controllerState===2 && "bordered-dot")} onClick={()=>{setControllerState(2)}}></div>
          <div className={"dot third " + (controllerState===3 && "bordered-dot")} onClick={()=>{setControllerState(3)}}></div>
        </div>

  
       {/* Features Section */}
        <div className={"features " + (controllerState<3 && "fade-features")}>

          <div className="right">
          {
            features.slice(0,3).map((feature)=>{
              return(
                <Feature key={feature.id} text = {feature.feature} middle={feature.id===2 && "left"}/>
              )
            })
          }
          </div>
  
          <div className="left">
          {
            features.slice(3,features.length).map((feature)=>{
              return(
                 <Feature className="feature-box"  key={feature.id} text = {feature.feature} middle={feature.id===5 && "right"}/>
             
              )
            })
          }
          </div>
        </div>


        {/* Background dots */}
        <img className="dots-bg dots-first" src={data.dots} alt="" />
        <img className="dots-bg dots-second" src={data.dots} alt="" />
        <img className={"dots-bg dots-third " + (controllerState>1 && "dots-transform")} src={data.dots} alt="" />
        <img className="dots-bg dots-fourth" src={data.dots} alt="" />


        {/* BACKGROUND SHAPES */}

        {/* Shapes on right */}
        <img className={"shapes-right-1 shape " + (controllerState>1 && "shape-fade")} src={data.diamond} alt="" />
        <img className={"shapes-right-2 shape " + (controllerState>1 && "shape-fade")} src={data.leftarrow} alt="" />
        <img className={"shapes-right-3 shape " + (controllerState>1 && "shape-fade")} src={data.cross} alt="" />
        <img className={"shapes-right-4 shape " + (controllerState>1 && "shape-fade")} src={data.circle} alt="" />

        {/* Shapes on left */}
        <img className={"shapes-left-1 shape-left " + (controllerState>1 && "shape-transform")} src={data.circle} alt="" />
        <img className={"shapes-left-2 shape-left " + (controllerState>1 && "shape-transform")} src={data.cross} alt="" />
        <img className={"shapes-left-3 shape-left " + (controllerState>1 && "shape-transform")} src={data.leftarrow} alt="" />
        <img className={"shapes-left-4 shape-left " + (controllerState>1 && "shape-transform")} src={data.diamond} alt="" />
      </div>
    )
}

export default Home
