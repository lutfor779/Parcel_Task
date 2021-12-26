import React, { useState } from 'react';
import { Alert, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';


const Resister = () => {
    const [registrationData, setRegistrationData] = useState({});
    const { user, resisterUser, isLoading, error, setError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...registrationData };
        newLogInData[field] = value;
        setError('');
        setRegistrationData(newLogInData);
    }

    const handleRegistrationSubmit = (e) => {
        e.preventDefault();
        if (registrationData.password !== registrationData.confirmPassword) {
            setError("Password did not match");
            return;
        }
        resisterUser(registrationData.email, registrationData.confirmPassword, registrationData.name, location, navigate);
    }

    return (
        <Container>
            <Box sx={{ minWidth: 320, maxWidth: 480, mx: 'auto' }}>

                {!isLoading && <Paper elevation={6} sx={{ px: 2, py: 3, mt: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'warning.main' }}>Please Resister</Typography>
                    <form onSubmit={handleRegistrationSubmit} >
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            label="Your Name"
                            type="text"
                            name='name'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            label="Your Email"
                            type="email"
                            name='email'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField
                            label="Your Password"
                            sx={{ width: "90%", m: 1 }}
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField
                            label="Retype Your Password"
                            sx={{ width: "90%", m: 1 }}
                            type="password"
                            name='confirmPassword'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        {error && <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                        }

                        <Button variant="contained"
                            sx={{ width: '90%', mx: 1, mt: 1, mb: 2 }}
                            type="submit" >Resister</Button>

                        <Link to="/"
                            style={{ textDecoration: "none" }}>
                            <Button variant="text">Already have an account? Login Here</Button>
                        </Link>
                    </form>
                    <br />
                    <Button variant="contained"
                        color="secondary"
                        sx={{ width: '90%', mx: 1, mt: 4 }}
                        onClick={() => signInWithGoogle(location, navigate)} >SingUp with Google</Button>
                </Paper>
                }

                {isLoading && <CircularProgress />
                }

                {user.email && <Alert severity="success">Registration Successfully</Alert>
                }
                <br /><br /><br /><br />
            </Box>
        </Container>
    );
};

export default Resister;