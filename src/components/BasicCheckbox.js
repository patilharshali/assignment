import React from 'react'

export default function BasicCheckbox(item){
    return <input type='checkbox' name={item.name} label={item.humanLabel} />
}