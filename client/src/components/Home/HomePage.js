/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Card, Paper, CardMedia, Grid, CardContent, CardHeader, CardActions, Collapse, Avatar, Hidden, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Home.css'
import hotel from '../../assets/images/hotel.jpg';
import { Button } from "react-responsive-button";
import "react-responsive-button/dist/index.css";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));





function HomePage() {


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Grid container >
            <Grid xs={12}
                className='subGrid'
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Card
                    sx={{
                        backgroundColor: "#111",
                        boxShadow: 5,
                        // border:"1px solid #7FDBFF",
                        position: "relative",
                        width: {
                            sx: 1.0, // 100%
                            sm: 500,
                            md: 1000,
                        },
                        width: "800px"
                    }}>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={hotel}
                            alt="Paella dish"
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                color: 'white',
                                padding: '10px',
                            }}
                        >
                            <Typography variant="h5">STUDENTS</Typography>
                            {/* <Typography variant="body2" style={{paddingRight:"10px"}}>"A good teacher can awaken joy in their students and leave a positive impression that lasts a lifetime...."</Typography> */}
                        </Box>
                    </Box>
                    <CardActions disableSpacing>
                        <Grid container>
                            <Grid xs={11} className="btnContainer" >
                                <Button className='styleButtonCard' ><span>VIEW</span></Button>
                                <Button className='styleButtonCard buttonPadding' ><span>INPUT</span></Button>
                                <Button className='styleButtonCard buttonPadding' ><span>MANAGE</span></Button>
                            </Grid>
                            <Grid xs={1} className="arrowDown">
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </Grid>
                        </Grid>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph className='cardTypography'>Here you can explore the Students registerd with us.</Typography>
                            <Typography paragraph className='cardTypography'>
                                Details like Student's address , class , age and course can be seen.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Grid >
        // </Box>
    )
}


export default HomePage;

