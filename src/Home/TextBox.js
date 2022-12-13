import { TextField } from "@mui/material"
import { useState} from "react"

export default function NumberText(props){

    const [input]=useState("")

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



            onChange={handleChange}
        />

    )
}