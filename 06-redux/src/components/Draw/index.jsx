import { connect } from "react-redux"
import Card from "../Card"

const Draw = props => {
    return (
        <Card title="Draw" color="purple">
            <p className="result draw">
                Drawing a number between <b>{props.min}</b> and <b>{props.max}</b> we got <b>{parseInt(Math.random() * (props.max - props.min) + props.min)}</b>
            </p>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.min,
        max: state.max
    }
}

export default connect(mapStateToProps)(Draw)