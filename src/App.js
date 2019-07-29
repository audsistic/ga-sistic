import React from 'react';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";
import { StickyContainer, Sticky } from 'react-sticky';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import CompTest from './experiments/ComponentTest';
import Home from './Home';
import SummaryComponent from './maincomponents/SummaryPage';

import NoMatch from './errors/ErrorPage';
// import Hidden from '@material-ui/core/Hidden';

import { ReactComponent as TicketIcon } from '../src/assets/images/icons/ticket_icon_outline.svg';

const styles = theme => ({
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
    [theme.breakpoints.down('sm')]: {
      minHeight: '16px',
    },
  },
  toolbarBottom: {
    background: '#FFFFFF',
    minHeight: '81px',
    position: 'sticky',
    top: 0,
  },
  sisticLogo: {
    width: "93px", 
    height: "42px",
    [theme.breakpoints.up('md')]: {
      marginLeft: '222px', 
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '18px', 
    },
  }

});


const linkStyle = {
  // textDecoration: 'none',
  fontSize: '14px',
  marginLeft: '25px',
}

const linkIconStyle = {
  width: '30px',
  height: '30px',
  border: '1px solid #FFFFFF',
  borderRadius: '50%',
  marginLeft: '25px',
}

const menuBar = {
  position: 'absolute',
  right: 0,
}

const linksBar = {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '201px',
}

const sisticBar = {
  display: 'flex',
  flexDirection: 'row',
  width: '33.6%',
  paddingRight: '201px',
}

class App extends React.Component {
  constructor(props) {
    super()

  }

  render() {

  const { classes } = this.props;

    return (
      <StickyContainer>
        <div className="main">
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar 
                  className="row no-gutters justify-content-end"
                  classes={{
                    root: classes.toolbarTop
                  }}>
                  <div className="desktop d-none d-md-block">
                    <div style={linksBar}>
                        <Link to="/organiser" style={
                        Object.assign({
                          color: '#D8D8D8',
                          },
                        linkStyle)}>Organiser</Link>
                      <Link to="/account" style={
                        Object.assign({
                          color: '#D8D8D8',
                          },
                        linkStyle)}>Your Account</Link>
                      <TicketIcon style={linkIconStyle} fill="#ffffff" />
                    </div>
                  </div>
                </Toolbar>
                </AppBar>

                
                  <Sticky topOffset={80}>
                    {({ style }) => 
                      <div style={{ ...style, backgroundColor: 'white', zIndex: 10,}}>
                        <AppBar position="static">
                          <Toolbar
                            classes={{
                              root: classes.toolbarBottom
                            }}>
                            <div style={{ width: '66.3%'}}>
                              
                                <div className={classes.sisticLogo}>
                                  <img src={require("../src/assets/images/icons/sistic_logo.png")} alt="" width="100%" height="100%"/>
                                </div>
                            </div>
                        
                            <div className="row no-gutters justify-content-end desktop d-none d-md-flex" style={sisticBar}>
                              <Link to="/home" style={
                                  Object.assign({color: '#747474',},
                                  linkStyle)
                                  }>Dashboard</Link>
                              <Link to="/plans" style={
                                  Object.assign({color: '#747474',},
                                  linkStyle)
                                  }>Price Plans</Link>
                            </div>
                            
                            <div className="mobile d-md-none" style={menuBar}>
                              <IconButton edge="end" className={classes.menuButton} aria-label="Menu">
                                <MenuIcon />
                              </IconButton>
                          </div>
                        </Toolbar>
                      
                    </AppBar>
                    </div>}
                  </Sticky>

            </div>
            <div>
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/components" component={CompTest} />
                  <Route path="/add" component={SummaryComponent} />
                  {/* when none of the above match, <NoMatch> will be rendered */}
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
            
        </div>
      </StickyContainer>

    );
  }
}

export default withStyles(styles)(App);
