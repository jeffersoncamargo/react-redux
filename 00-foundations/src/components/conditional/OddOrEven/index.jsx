import './styles.scss'

export default props => (
    <p className="odd-or-even">
        The number <strong>{props.number}</strong> is <strong>{props.number % 2 === 0 ? "Even" : "Odd"}</strong>.
    </p>
)