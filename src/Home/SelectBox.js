import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function BasicSelect(props) {
    //const [targetVal, setTargetVal] = React.useState('');

    function handleChange(event) {
        const {
            target: {value},
        } = event;
        props.setterFunction(value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    label="Age"
                    onChange={handleChange}
                >

                    {
                        props.selectValues.map((value) =><MenuItem value={value}>{value}</MenuItem>)
                    }
                </Select>


            </FormControl>
        </Box>
    );
}
