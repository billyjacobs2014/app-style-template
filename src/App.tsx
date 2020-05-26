import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { 
  Paper, AppBar, Toolbar, IconButton, Typography, Button, makeStyles, createStyles, Theme 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const classes = useStyles();
  const getRandomColor = (value: number) => {
    const selectorValue = value % 6;
    switch (selectorValue) {
      case 0:
        return 'darkred';
      case 1:
        return '#356277';
      case 2:
        return '#75cc75';
      case 3:
        return 'transparent';
      case 4:
        return 'purple';
      case 5:
        return 'orange';
      default:
        return 'white';
    }
  };
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="relative" className="headerContainer">
          <IconButton edge="start" 
            className={classes.menuButton} 
            color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My First App looking Web App
          </Typography>
          <Button color="inherit">Login</Button>
        </AppBar>
      </div>
      <Paper className="contentContainer" square={true}>
        {/* Generate many rows */}
        <div style={{display: 'flex', flexWrap: 'wrap', flex: 1}}>
          {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
            1,1,1,1,1,1,1,1,1,1,1,1].map((value, index) =>
            <div style={{display: 'flex', margin: '5px',
                  border: 'solid 1px white', 
                  background: getRandomColor(index),
                  width: '95px', height: '95px',
                  borderRadius: '20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '30px' 
                }} key={index}>
              {index + 1}
            </div>
          )}
        </div>
      </Paper>
      <AppBar position="relative" className="footerContainer">
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </AppBar>
    </div>
  );
}

export default App;
