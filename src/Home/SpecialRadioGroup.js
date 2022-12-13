import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'

export default function SpecialRadioGroup(props) {

    function checkRadio(event) {
        const {
            target: {value},
        } = event;
        props.setterFunction(value);
    }

    return (
        <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">{props.label}</FormLabel>
            <RadioGroup
                sx={{display:'grid',gridTemplateColumns: 'repeat(2, 1fr)'}}
                aria-labelledby="radio-buttons-group-label"
                // defaultValue={props.radioValues[0]}
                onChange={checkRadio}
                name="radio-buttons-group"
            >
                {
                    props.radioValues.map((value) => <FormControlLabel value={value} control={<Radio/>} label={value}/>)
                }

            </RadioGroup>
        </FormControl>
    );
}