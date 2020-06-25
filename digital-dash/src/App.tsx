import React from "react";
import {
  Tabs,
  AppBar,
  Tab,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Grid,
  Typography,
} from "@material-ui/core";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import defaultTheme from "./defaultTheme";
import logo from "./assets/logo.jpg";

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    alignItems: "center",
    height:"108px"
  },
  navLogo: {

  },
  navTab: {
    fontSize: "0.5rem",
    
  },
  logo: {
    height: "3rem",
    width: "auto",
  },
  topHeading: {
    padding: "1rem 2rem",
  },
  topHeadingText: {
    paddingLeft: "5px",
    display: "flex",
    alignItems: "center",
  },
  body:{
    height: "1080px"
  }
});

function App() {
  const theme = createMuiTheme(defaultTheme);
  const classes = useStyles();
  const [navTabValue, setNavTabValue] = React.useState("home");
  const handleNavChange = (event: any, tab: any) => {
    setNavTabValue(tab);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container direction="row" className={classes.body}>
          <Grid container md={6} className={classes.navBar}>
            <img className={classes.logo} src={logo} />
            <Typography align="left" className={classes.topHeadingText}>
              DigitalDash
            </Typography>
          </Grid>

          <Router>
            <Grid container justify="center" md={6} style={{paddingTop:"20px",paddingBottom:"35px"}}>
              <Tabs
                value={navTabValue}
                onChange={handleNavChange}
                className={classes.navTab}

              >
                <Tab
                  className={classes.navTab}
                  value="home"
                  label="home"
                  component={Link}
                  to={{ pathname: "/home" }}
                />
                <Tab
                  className={classes.navTab}
                  value="projects"
                  label="projects"
                  component={Link}
                  to={{ pathname: "/projects" }}
                />
                <Tab
                  className={classes.navTab}
                  value="careers"
                  label="careers"
                  component={Link}
                  to={{ pathname: "/careers" }}
                />
                <Tab
                  className={classes.navTab}
                  value="contact"
                  label="contact"
                  component={Link}
                  to={{ pathname: "/contact" }}
                />
              </Tabs>
            </Grid>
            <Grid md={12} className={classes.body}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" component={HomePage} />
            </Switch>
            </Grid>
          </Router>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
