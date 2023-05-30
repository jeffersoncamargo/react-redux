import './styles.scss'

export default props => (
    <div className="card" style={{ borderColor: props.color ?? 'red' }}>
        <h2 className="card-title" style={{ backgroundColor: props.color ?? 'red' }}>{props.title}</h2>
        <div className="card-body">
            {props.children}
        </div>
    </div>
)