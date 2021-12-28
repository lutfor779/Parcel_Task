import { Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const AddParcel = () => {
    const { isLoading, user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [parcelData, setParcelData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newParcelData = { ...parcelData };
        newParcelData[field] = value;
        setParcelData(newParcelData);
    }
    // console.log(loading)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = parcelData;
        const email = "email";
        data[email] = user.email;

        fetch('https://nameless-dusk-06135.herokuapp.com/parcels', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setLoading(false)
                    alert('Parcel Added Successfully');
                    e.target.reset();
                }
            }).catch(err => {
                setLoading(false);
                alert(`OOOPS!!! \n
                We can NOT add your parcel! \n
                Please Try Again!!!`);
            })
    }

    return (
        isLoading ? <CircularProgress />
            :
            <Container>
                <Box sx={{ minWidth: 300, maxWidth: 680, mx: 'auto' }}>

                    <Paper elevation={6} sx={{ px: 2, py: 3, mt: 3 }}>

                        <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'info.main', fontWeight: 'bold' }}>Add A Parcel </Typography>

                        <form onSubmit={handleSubmit} >

                            <TextField id="standard-basic"
                                sx={{ width: "90%", m: 1 }}
                                label="Parcel Info"
                                type="text"
                                name='info'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                sx={{ width: "90%", m: 1 }}
                                label="Parcel Cost"
                                type="number"
                                name='cost'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                sx={{ width: "90%", m: 1 }}
                                label="Starting Location"
                                type="text"
                                name='start_location'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Ending Location"
                                sx={{ width: "90%", m: 1 }}
                                type="text"
                                name='end_location'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Sender Name"
                                sx={{ width: "90%", m: 1 }}
                                type="text"
                                name='sender_name'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Sender Address"
                                sx={{ width: "90%", m: 1 }}
                                type="text"
                                name='sender_address'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Sender Phone No."
                                sx={{ width: "90%", m: 1 }}
                                type="number"
                                name='sender_phone'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Receiver Name"
                                sx={{ width: "90%", m: 1 }}
                                type="text"
                                name='receiver_name'
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Receiver Address"
                                sx={{ width: "90%", m: 1 }}
                                type="text"
                                name="receiver_address"
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <TextField id="standard-basic"
                                label="Receiver Phone No."
                                sx={{ width: "90%", m: 1 }}
                                type="number"
                                name="receiver_phone"
                                onBlur={handleOnBlur}
                                variant="standard"
                                color="warning"
                                required
                                InputLabelProps={{ required: false }} />

                            <Button variant="contained"
                                sx={{ width: '90%', mx: 1, mt: 3 }}
                                type="submit"
                                disabled={loading}
                            >Add Parcel
                            </Button>
                        </form>
                    </Paper>
                </Box>
            </Container>
    );
};

export default AddParcel;