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
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '50px',
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbarTop: {
    backgroundImage: 'linear-gradient(90deg, #0080C9, #C86DD7)',
    [theme.breakpoints.up('md')]: {
      minHeight: '55px',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '16px',
    },
  },
  toolbarBottom: {
    background: '#FFFFFF',
    minHeight: '81px',
  },
  container: {
    [theme.breakpoints.up('md')]: {
      margin: '0 72px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 4px',
    },
  }
}));

const sisticLogo = {
  width: "93px", 
  height: "42px",
}

const linkStyle = {
  textDecoration: 'none',
  color: '#D8D8D8',
  fontSize: '14px',
}

function App() {

  const classes = useStyles();

  return (
      <div className="main">

          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar 
                className="row justify-content-end"
                classes={{
                  root: classes.toolbarTop
                }}>
                <div className="desktop d-none d-md-block">
                  <Link to="/organiser" style={linkStyle}>Organiser</Link>
                  <Link to="/organiser" style={linkStyle}>Your Account</Link>
                </div>
              </Toolbar>
              <Toolbar
                classes={{
                  root: classes.toolbarBottom
                }}>
                  <div className="desktop d-none d-md-block" style={Object.assign({ marginLeft: '222px', }, sisticLogo)}>
                    <img src={require("../src/assets/images/icons/sistic_logo.png")} alt="" width="100%" height="100%"/>
                  </div>

                  <div className="mobile d-md-none" style={Object.assign({ marginLeft: '18px', }, sisticLogo)}>
                    <img src={require("../src/assets/images/icons/sistic_logo.png")} alt="" width="100%" height="100%"/>
                  </div>

                  <div className="mobile d-md-none">
                  <IconButton edge="end" className={classes.menuButton} aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div>
            <Container 
              classes={{
                root: classes.container
              }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/components" component={CompTest} />

                {/* when none of the above match, <NoMatch> will be rendered */}
                <Route component={NoMatch} />
              </Switch>
            </Container>
          </div>
      </div>
  );
}

export default App;
