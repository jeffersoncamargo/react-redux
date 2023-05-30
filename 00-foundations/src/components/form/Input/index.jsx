import { useState } from "react"

export default props => {
    const [value, setValue] = useState('Valor')

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }

    return (
        <input className="controlled-component" onChange={handleChange} value={value} />
    )
}