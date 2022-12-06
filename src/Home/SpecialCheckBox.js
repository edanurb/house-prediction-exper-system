import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel'
export default function SpecialCheckBox(props){
    return (
        <FormGroup>
            <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
            {
                props.values.map((value)=> <FormControlLabel control={<Checkbox />} label={value} />) 
            }
         
          
        </FormGroup>
    );
    
}