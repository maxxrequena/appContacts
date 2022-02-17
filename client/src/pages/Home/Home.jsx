import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { Link } from '@mui/material';

const Home = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    //color="transparent"
                    style={{ 
                        background: '#C0C0C0', 
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={(e) => handleMenuClick(e)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}><Link underline="none" href="/form">AddContact</Link></MenuItem>
                            <MenuItem onClick={handleMenuClose}><Link underline="none" href="/contacts">Contacts</Link></MenuItem>
                            <MenuItem onClick={handleMenuClose}><Link underline="none" href="/">AboutMe</Link></MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

            </Box>
        </div>
    );
};

export default Home;