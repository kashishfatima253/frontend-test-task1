import './styles.css'
const Feature = (props) => {
  return (
    <div className="feature-border">
    <div className="feature-bubble">
      <p className="feature-text">{props.text}</p>
    </div>

    </div>
  )
}

export default Feature
