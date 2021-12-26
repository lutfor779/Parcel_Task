import { Alert, Button, CircularProgress, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import '../style.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, error, setError, signInWithGoogle, signInWithEmailPassword, isLoading, logOut } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...loginData };
        newLogInData[field] = value;
        setError('')
        setLoginData(newLogInData);
    }

    const handleLoginSubmit = (e) => {
        signInWithEmailPassword(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }


    return (
        <Container sx={{ color: 'white' }}>

            <Box sx={{ minWidth: 345, maxWidth: 480, mx: 'auto' }}>
                <Paper elevation={6} sx={{ px: 2, py: 3, mt: 8 }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 4, color: 'warning.main' }}>Please Login</Typography>
                    <form onSubmit={handleLoginSubmit} >
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            label="Email"
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        <TextField
                            label="Password"
                            sx={{ width: "90%", m: 1 }}
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            variant="standard"
                            required />

                        {error && <Alert variant="filled" severity="error">{error}</Alert>
                        }
                        <Button variant="contained"
                            sx={{ width: '90%', mx: 1, mt: 1, mb: 2 }}
                            type="submit" >Login</Button>

                        <Link to="/resister"
                            style={{ textDecoration: "none" }}>
                            <Button variant="text">New User? Please Resister.</Button>
                        </Link>
                    </form>

                    <Button variant="contained"
                        color="secondary"
                        sx={{ width: '90%', mx: 1, mt: 4 }}
                        onClick={() => signInWithGoogle(location, navigate)} >Signin with google</Button>
                </Paper>

                {isLoading && <CircularProgress />
                }
                {user.email && <Alert severity="success">Login Successfully</Alert>
                }
                <br /><br /><br /><br />


                {
                    user.email && <Button variant="contained"
                        sx={{ width: '90%', m: 1 }}
                        onClick={() => logOut()} >Logout</Button>
                }
            </Box>
        </Container>
    );
};

export default Login;