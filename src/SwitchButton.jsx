import React from 'react'

const SwitchButton = ({onSwitch}) => {


    return (
        <div>
            <button onClick={onSwitch}>
                Switch it Up!
            </button>
        </div>
    )
}

export default SwitchButton;
