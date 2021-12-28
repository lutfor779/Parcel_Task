import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="/parcels" style={{ textDecoration: 'none', color: 'white' }}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        Parcels
                                    </Typography>
                                </MenuItem>
                            </Link>

                        </Menu>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                            >
                                PARCEL HOUSE
                            </Typography>
                        </Link>

                    </Box>






                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        >
                            PARCEL HOUSE
                        </Typography>
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <Link to="/home" style={{ textDecoration: "none" }}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                            </Button>
                        </Link>
                        <Link to="/parcels" style={{ textDecoration: 'none' }}>
                            <Button onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                Parcels
                            </Button>
                        </Link>
                    </Box>


                    {
                        user.email ?
                            <Button
                                onClick={() => logOut()}
                                color="inherit" >Logout</Button>
                            :
                            <Link to="/login" style={{ textDecoration: "none", color: 'white' }}>
                                <Button variant="outlined" size="small" color="inherit" >Login</Button>
                            </Link>
                    }

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;