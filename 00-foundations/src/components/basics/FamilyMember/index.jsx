import './styles.scss'

export default props => (
    <p className="family-member">
        <span>{props.name}</span> <strong>{props.surname}</strong>
    </p>
)