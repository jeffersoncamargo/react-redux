import './styles.scss'

export default props => (
    <div className="direct-comunication-child">
        <p><strong>Text:</strong> {props.text}</p>
        <p><strong>Number:</strong> {props.number}</p>
        <p><strong>Boolean:</strong> {props.boolean ? 'True' : 'False'}!</p>
    </div>
)