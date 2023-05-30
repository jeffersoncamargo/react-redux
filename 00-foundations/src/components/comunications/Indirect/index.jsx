import { useState } from "react"
import IndirectChild from "../IndirectChild"

export default props => {
    const getInfo = (value) => { setValue(value)}
    const [value, setValue] = useState('?')

    return <div className="indirect-comunication-parent">
        <b>{value}</b>
        <br />
        <IndirectChild getInfo={getInfo} />
    </div>
}