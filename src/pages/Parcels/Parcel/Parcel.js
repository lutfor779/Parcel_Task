import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Parcel = ({ parcel }) => {
    const { info, cost, start_location, end_location, sender_name, receiver_name, sender_address, receiver_address, sender_phone, receiver_phone } = parcel;

    return (
        <Grid item xs={4} sm={8} md={6} lg={6} >
            <Paper sx={{ p: 4 }}>
                <Typography variant="h4" component="div" gutterBottom>
                    <span>Parcel Info:</span> {info}
                </Typography>
                <Typography variant="h6" component="div" gutterBottom>
                    <span>Parcel Cost:</span> ${cost}
                </Typography>

                <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} sx={{ textAlign: 'start', mt: 3 }}>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>From:</span> {start_location}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>To:</span> {end_location}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} sx={{ textAlign: 'start' }}>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Sender:</span> {sender_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Receiver:</span> {receiver_name}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} sx={{ textAlign: 'start' }}>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Sender Phone:</span> {sender_phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Receiver Phone:</span> {receiver_phone}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container columns={{ xs: 4, sm: 12, md: 12, lg: 12 }} sx={{ textAlign: 'start' }}>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Sender Address:</span> {sender_address}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={6} md={12} lg={6}>
                        <Typography variant="subtitle1" component="div" gutterBottom>
                            <span>Receiver Address:</span> {receiver_address}
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    );
};

export default Parcel;