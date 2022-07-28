import * as React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
import logo from '../img/logo.png'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "110px",

    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    // },
    appBar: {
        backgroundColor: "darkblue",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },

    button: {
        marginLeft: "20px",
    },

    image: {
        marginRight: "10px",
        height: "80px"
    },
}));

export default function Navbar() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AppBar position="fixed" style={{ background: '#212121' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} className={classes.image} />
                    </IconButton>
                    <div className={classes.grow} ></div>
                    <Typography variant="h6" color="white" component="p">
                        Leo@gmail.com
                    </Typography>
                    <div className={classes.button}>
                        <Button variant="contained" style={{ background: '#424242' }}>
                            <strong>Sign In</strong>
                        </Button>
                        <IconButton aria-label="show cart items" color='inherit'>
                            <Badge  badgeContent={2} color="primary">
                                <ShoppingCartIcon fontSize="large" />
                            </Badge>

                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
