import React from 'react';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CompTest from './experiments/ComponentTest';
import Home from './Home';
import NoMatch from './errors/ErrorPage';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '50px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarTop: {
    backgroundImage: 'linear-gradient(90deg, #0080C9, #C86DD7)',
    minHeight: '55px',
  },
  toolbarBottom: {
    background: '#FFFFFF',
    minHeight: '81px',
  }
}));

const sisticLogo = {
  width: "93px", 
  height: "42px",
  marginLeft: '222px',
}

const linkStyle = {
  textDecoration: 'none',
  color: '#D8D8D8',
  fontSize: '14px',
}

function App() {

  const classes = useStyles();

  return (
      <div className="App">

          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar classes={{
                  root: classes.toolbarTop
                }}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <div className="row justify-content-end">
                  <Link to="/organiser" style={linkStyle}>Organiser</Link>
                  <Link to="/organiser" style={linkStyle}>Your Account</Link>
                </div>
              </Toolbar>
              <Toolbar
                classes={{
                  root: classes.toolbarBottom
                }}>
                  <div style={sisticLogo}>
                    <img src={require("../src/assets/images/icons/sistic_logo.png")} alt="" width="100%" height="100%"/>
                  </div>
              </Toolbar>
            </AppBar>
          </div>
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/components" component={CompTest} />

              {/* when none of the above match, <NoMatch> will be rendered */}
              <Route component={NoMatch} />
            </Switch>
          </Container>
      </div>
  );
}

export default App;
