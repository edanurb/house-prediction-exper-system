import { TextField } from "@mui/material"
import { useState } from "react"
import { InputLabel } from '@mui/material';

export default function NumberText(props){

    const [input,setInput]=useState("0")
    const defaultVal="0"

    function handleChange(event){
        
        setInput(event.target.value.replace(/[^0-9]/g,""))
    }
    return(
       
        
        <TextField 
            defaultValue={input.defaultValue}
            value={input}
            label={props.label}
            style = {{width: 150}} 
            onChange={handleChange} 
        />
        
    )
}