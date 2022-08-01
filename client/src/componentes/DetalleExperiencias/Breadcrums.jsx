import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import data from '../experiencias.json'
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrums({i, i2, i3}) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Inicio
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      {i}
    </Link>,
   <Link
   underline="hover"
   key="2"
   color="inherit"
   href="/material-ui/getting-started/installation/"
   onClick={handleClick}
 >
  {i2}
 </Link>,
 <Link
 underline="hover"
 key="2"
 color="inherit"
 href="/material-ui/getting-started/installation/"
 onClick={handleClick}
>
  {i3}
</Link>,
  ];

  return (
    <Stack sx={{marginTop:'6rem'}}spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
     
      
    </Stack>
  );
}