import './styles.scss'

export default props => (
    <div className={'card ' + (props.color ?? 'red')}>
        <div className="card-header">
            {props.title}
        </div>
        <div className="card-content">
            {props.children}
        </div>
    </div>
)