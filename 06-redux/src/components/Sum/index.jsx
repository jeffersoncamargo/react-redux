import { connect } from "react-redux"
import Card from "../Card"

const Sum = props => {
    return (
        <Card title="Sum" color="blue">
            <p className="result sum">
                The Sum of <b>{props.min}</b> and <b>{props.max}</b> is equal to <b>{props.min+props.max}</b>
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

export default connect(mapStateToProps)(Sum)