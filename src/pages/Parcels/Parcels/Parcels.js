import { Alert, AlertTitle, CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Parcel from '../Parcel/Parcel';

const Parcels = () => {
    const { user, isLoading } = useAuth();
    const [parcels, setParcels] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/parcels?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setParcels(data);
            }).catch(err => {
                console.log(err);
            })
    }, [user.email]);

    return (
        isLoading ? <CircularProgress />
            :
            parcels.length > 0
                ?
                <Container>
                    <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
                        {
                            parcels.map(parcel => <Parcel key={parcel._id} parcel={parcel} />)
                        }
                    </Grid>
                </Container>

                :

                <Alert severity="warning" sx={{ maxWidth: '250px', mx: 'auto', mt: 8 }}>
                    <AlertTitle>Oops!!!</AlertTitle>
                    Currently you have no parcel!
                </Alert>
    );
};

export default Parcels;