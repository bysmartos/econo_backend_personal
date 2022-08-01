import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';

// const StyledFormControl = styled(FormControl)(({ theme }) => ({
//         marginTop: '4rem',
//         marginLeft: '1rem',
//         fontSize:'1rem' 
//   }));

//   const StyledSelect = styled(Select)(({ theme }) => ({
//     padding: '0',
//     marginLeft: '1rem',
//     fontSize:'1rem' 
// }));

  

export default function DesplegableCantidad() {
  const [cantidad, setCantidad] = React.useState('1');
  const handleChange = (event) => {
    setCantidad(event.target.value);
  };

  return (
    <div>
      <FormControl >
        <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={cantidad}
          onChange={handleChange}
        >
          <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}