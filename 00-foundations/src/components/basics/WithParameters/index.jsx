import './styles.scss'

export default props => (
    <div id="with-props">
        <p>Name param: <strong>{ props.name }</strong></p>
        <p>Age int param: <strong>{ props.age }</strong></p>
    </div>
)