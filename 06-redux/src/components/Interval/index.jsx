import Card from '../Card'
import { connect } from "react-redux"
import setMax from '../../store/actions/max'
import setMin from '../../store/actions/max'
import './styles.scss'

const Interval = props => {
    return (
        <Card title="Numbers" color="red">
            <div className='interval'>
                <label htmlFor="intervalMin">
                    <span>Min:</span>
                    <input type="number" name="intervalMin" id="intervalMin" value={props.min} onChange={(e) => {props.setMin(parseInt(e.target.value))}} />
                </label>
                <label htmlFor="intervalMax">
                    <span>Max:</span>
                    <input type="number" name="intervalMax" id="intervalMax" value={props.max} onChange={(e) => {props.setMax(parseInt(e.target.value))}} />
                </label>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.min,
        max: state.max
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMin: (min) => dispatch(setMin(min)),
        setMax: (max) => dispatch(setMax(max)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)