import { TextField } from "@mui/material"
import { useState} from "react"

export default function NumberText(props){

    const [input]=useState("0")

    function handleChange(event){
        const {
            target: {value},
        } = event;
        props.setterFunction(value);
    }
    return(
        <TextField 
            defaultValue={input.defaultValue}
            value={props.value}
            label={props.label}
            style = {{width: 150}} 
            onChange={handleChange} 
        />
        
    )
}