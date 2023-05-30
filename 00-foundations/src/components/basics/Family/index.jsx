import React, {cloneElement} from 'react'

import './styles.scss'

export default props => (
    <div className="family">
        <h3>Family <strong>{props.surname}</strong></h3>
        {React.Children.map(props.children, child => (
            cloneElement(child, props)
        ))}
    </div>
)