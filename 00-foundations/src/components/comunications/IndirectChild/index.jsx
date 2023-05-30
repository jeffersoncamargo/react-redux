export default props => (
    <div className="indirect-comunication-child">
        <button onClick={(e) => {props.getInfo('Value passed indirectly from child to parent')}}>Give information to the parent (state)</button>
    </div>
)