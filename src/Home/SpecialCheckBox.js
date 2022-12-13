import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel'

export default function SpecialCheckBox(props) {

    function handleSelect(event) {
        const {
            target: {value},
        } = event;
        if (event.target.checked) {
            let choice = value;
            let array = props.value;
            array.push(choice);
            props.setterFunction([...array]);
        } else {
            let array = props.value.filter( (front) => front != value )
            props.setterFunction([...array])
        }
    }

    return (
        <FormGroup  onChange={handleSelect}>
            <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
            {
                props.values.map((value) => <FormControlLabel control={<Checkbox value={value}/>} label={value}/>)
            }
        </FormGroup>
    );

}