import React from 'react'
import BasicLabel from './BasicLabel'

export default function BasicSelect({name, type, human_label}){
    
    return(
    <div>
        <BasicLabel label={human_label}/><select type = {type} name={name}/>
        </div>
    )
}