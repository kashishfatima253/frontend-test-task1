/* eslint-disable react/prop-types */
import './styles.css'
const Feature = (props) => {
  return (
    <div className="feature-border" style={{left:props.middle === "left" && "-50px", right:props.middle === "right" && "-60px"}}>
    <div className="feature-bubble">
      <p className="feature-text">{props.text}</p>
    </div>

    </div>
  )
}

export default Feature
