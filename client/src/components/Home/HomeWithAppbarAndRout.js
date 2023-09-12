// This the main page where home page and other pages are imported 11-09-2023

import './HomeWithAppbarAndRout.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CrouselCard from './CrouselCard';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BottomNavbar from './BottomNavbar';
import { Grid } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Carousel from './Carousel';
import { Routes, Route, } from 'react-router-dom';
import PdfCard from '../PdfClick/PdfClick';



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle}  >
            {/* <Grid container>
                <Grid xs={4} sx={{ textAlign: 'center' , paddingTop:'18px'}}>
                    <CircleOutlinedIcon>
                        <PermIdentityOutlinedIcon />
                    </CircleOutlinedIcon>
                </Grid>
                <Grid  xs={8}>
                    <Typography variant="h6" sx={{ my: 2, color: "#0b728f" }} >
                        Hello
                    </Typography>
                </Grid>
            </Grid> */}
            {/* <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '3vh' , paddingTop:'15px' , paddingBottom:'5px'}}
            >
              <AccountCircleOutlinedIcon className='user' />
            </Grid>
            <Typography textAlign="center" sx={{padding:'5px'}}>Hello Neha</Typography> */}
            <Grid
                container
                direction="row"
                alignItems="space-between"
                justifyContent="center"
            >
                <Grid
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '3vh', paddingTop: '15px', paddingBottom: '5px' }}
                >
                    <AccountCircleOutlinedIcon className='user' />
                </Grid>
                <Grid
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ paddingTop: 15, paddingBottom: 5 }}
                >
                    <Typography textAlign="center" sx={{ padding: 2.1, color: '#0b728f', fontSize: 20 }} >Hello Neha !</Typography>
                </Grid>
            </Grid>
            <Divider />
            <List >
                {navItems.map((item, index) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left', color: "#0b728f", fontSize: 18 }}>
                            <ListItemIcon sx={{ color: "#0b728f", fontSize: 18 }}>
                                {index % 2 == 0 ? <HomeOutlinedIcon /> : <PeopleAltOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className='MainBoxHome' sx={{ backgroundColor: '#fdfeff' }}>
            <CssBaseline />
            <AppBar component="nav" className='AppbarClass'>
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav >
                <Drawer
                    PaperProps={{
                        sx: {
                            // backgroundColor: "#E2E2E2",
                            backgroundColor: "#fafcff",
                            color: "Black",
                        }
                    }}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" >
                <Toolbar />
                <Routes>
                    <Route path='/aapka-shikshak/Home' element={<Carousel />} />
                    <Route path='/aapka-shikshak/Pdf' element={<PdfCard />} />
                </Routes>
                <BottomNavbar />
            </Box>
        </Box>
    );
}

export default DrawerAppBar;
