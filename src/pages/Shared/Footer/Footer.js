import { Paper, Typography } from '@mui/material';
import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <Paper sx={{ p: 3, pb: 0, mt: 6 }}>
            <Typography variant="h4" component="div" gutterBottom>Parcel House</Typography>

            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">mdlrrahman779@gmail.com</a><br />

            <Typography variant="body2" gutterBottom>
                Phone: +880 17930-54198
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ mb: 4 }}>Address: Dhaka-1230, Bangladesh</Typography>
            <hr />
            <Typography variant="caption" gutterBottom>
                Copyright ©2021 All rights reserved | This template is made by Lutfor Rahman
            </Typography>
        </Paper>

    );
};

export default Footer;