import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

function HeaderElement(props) {
    return (
        <Grid><Link sx={{ textDecoration: 'none', color: '#4a4848',fontSize:'14px' }}><Typography>{props.txt}</Typography></Link></Grid>
    );
}

export default HeaderElement;