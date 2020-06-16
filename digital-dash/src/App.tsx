import React from 'react';
import { Tabs, AppBar, Tab, makeStyles, ThemeProvider, createMuiTheme, Grid, Typography } from '@material-ui/core';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './components/HomePage/HomePage';
import defaultTheme from './defaultTheme';
import logo from './assets/logo.jpg';

const useStyles = makeStyles({
  navBar: {
    justifyContent: 'flex-end'
  },
  navTab: {
    fontSize: '0.5rem'
  },
  logo: {
    height: '3rem',
    width: 'auto',
  },
  topHeading: {
    padding: '1rem 2rem',
  },
  topHeadingText: {
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1em',
  }

})


function App() {
  const theme = createMuiTheme(defaultTheme);
  const classes = useStyles();
  const [navTabValue, setNavTabValue] = React.useState('home');
  const handleNavChange = (event: any, tab: any) => {
    setNavTabValue(tab);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container direction='row' justify='space-between' className={classes.topHeading} >
          <Typography variant='h1' align='left' className={classes.topHeadingText} >DigitalDash</Typography>
          <img className={classes.logo} src={logo} />
        </Grid>
        <Router>
          <Tabs
            value={navTabValue}
            onChange={handleNavChange}
            classes={{
              flexContainer: classes.navBar,
            }}
          >
            <Tab
              className={classes.navTab}
              value='home'
              label='home'
              component={Link}
              to={{ pathname: '/home' }}
            />
            <Tab
              className={classes.navTab}
              value='projects'
              label='projects'
              component={Link}
              to={{ pathname: '/projects' }}
            />

          </Tabs>
          <Switch>
            <Route path='/home' component={HomePage} />
          </Switch>
        </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;
