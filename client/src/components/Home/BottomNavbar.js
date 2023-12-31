import './BottomNavbar.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import QuizIcon from '@mui/icons-material/Quiz';
import ForumIcon from '@mui/icons-material/Forum';
import CarouselCard from './CrouselCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActiveBottomNavRedux } from '../ReduxToolkit/HomeSlice';
import { Button } from 'react-responsive-button';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}


export default function FixedBottomNavigation() {

  //#region ActiveBottomNav reduxToolkit State
  const dispatch = useDispatch();
  const setActiveBottomNavRedux = (value) => {
    dispatch(ActiveBottomNavRedux(value))
  }

  const ActiveBottomNavValueRedux = useSelector((state) => state.HomeState.ActiveBottomNav)
  // console.log(ActiveBottomNavValueRedux);

  const navigate = useNavigate();
  const navigateToPage = (value) => {
    navigate(`/aapka-shikshak/${value}`);        //real routing dynamic
  };

  //#endregion ActiveBottomNav reduxToolkit State



  const [bottomNavValue, setbottomNavValue] = React.useState([]);
  console.log(bottomNavValue);

  //#region Implemented local storage for state management on page reload instead of redux as on pagereload redux data get refreshed to initial state 14.09.2023
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('activeBottomNav'));
    console.log(items);
    if (items) {
      setbottomNavValue(items);
    }
  }, []);
  //#endregion

  useEffect(() => {
    localStorage.setItem('activeBottomNav', JSON.stringify(bottomNavValue));
  }, [bottomNavValue]);


  // useEffect(() => {
  //   setbottomNavValue(ActiveBottomNavValue)
  // }, [ActiveBottomNavValue])
  
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [bottomNavValue, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      {/* <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItem button key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        ))}
      </List> */}
      <List>
        {/* <CarouselCard/> */}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          className='BottomNavigationClass'
          showLabels
          value={bottomNavValue}
          onChange={(event, bottomNavValue) => {
            setbottomNavValue(bottomNavValue);
            setActiveBottomNavRedux(bottomNavValue);
            navigateToPage(bottomNavValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} value='Home' />
          <BottomNavigationAction label="Pdf" icon={<PictureAsPdfIcon />} value='pdf' />
          <BottomNavigationAction label="Quiz" icon={<QuizIcon />} value='Quiz' />
          <BottomNavigationAction label="Community" icon={<ForumIcon />} value='Community' />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: '/static/images/avatar/1.jpg',
  },
];