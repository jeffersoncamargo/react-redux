import Card from "../Card"
import { connect } from "react-redux"

const Avg = props => {
    return (
        <Card title="Avg" color="green">
            <p className="result avg">
                The AVG value between <b>{props.min}</b> and <b>{props.max}</b> is <b>{(props.min+props.max) / 2}</b>
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

export default connect(mapStateToProps)(Avg)