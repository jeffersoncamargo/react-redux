import './styles.scss'

export default props => (
    <div className="random">
        <p>Min: {props.min}</p>
        <p>Max: {props.max}</p>
        <p><strong>Random: <span>{Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</span></strong></p>
    </div>
)