import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const additionalFeaturesValues=["Site İçersinde","Manzaralı","Otopark Var","Ankastre Mutfaklı","Çelik Kapılı","Tadilat Yapılmış","Havuz Var","Spor Salonu Var"]




export default function MultipleSelectInput(props) {
    // const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        props.setterFunction(

            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(props.value)
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={props.value}
                    onChange={handleChange}
                    input={<OutlinedInput label={props.label} />}

                >
                    {props.values.map((value) => (
                        <MenuItem
                            key={value}
                            value={value}

                        >
                            {value}
                        </MenuItem>

                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
