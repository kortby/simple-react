import React, { useReducer } from 'react';

export function Checkbox() {
    const [isChecked, toggle] = useReducer(
        isChecked => !isChecked,
        false
    );
    return (
        <div>
            <label htmlFor="checkbox">{isChecked ? 'Yessss': 'not checked'}</label>
            <input id="checkbox"
                    type="checkbox" 
                    value={isChecked} 
                    onChange={toggle} />
        </div>
    )
}
