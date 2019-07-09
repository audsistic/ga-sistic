import React from 'react';
import './assets/css/App.css';

import { Switch, Route } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CompTest from './experiments/ComponentTest';
import Home from './Home';
import NoMatch from './errors/ErrorPage';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '70px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {

  const classes = useStyles();

  return (
      <div className="App">
          <div className={classes.root}>
            <AppBar position="fixed">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Gem Arbituals
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/components" component={CompTest} />

            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
      </div>
  );
}

export default App;
