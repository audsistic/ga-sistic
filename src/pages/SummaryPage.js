import React from 'react';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Button from '@material-ui/core/Button';

import TicketInfoComponent from './TicketInfo';

import { ReactComponent as TabImageOne } from '../../src/assets/images/icons/tabs/tab_1.svg';
import { ReactComponent as TabImageTwo } from '../../src/assets/images/icons/tabs/tab_2.svg';
import { ReactComponent as TabImageThree } from '../../src/assets/images/icons/tabs/tab_3.svg';

const styles = theme => ({
  container: {
    width: 'initial',
    [theme.breakpoints.up('md')]: {
      margin: '185px 72px 0 72px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '136px 4px 0px 4px',
    },
  }, 
  buttonContainer: {
    width: 'initial',
    background: '#ffffff',
    padding: '36px 24px 42px',
    display: 'flex',
    justifyContent: 'center',
  },
  //buttons
  continueButton: {
    background: theme.palette.primary.main,
    padding: '20px 40px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    margin: '0px 4px',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      width: '222px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  discardButton: {
    background: theme.palette.primary.light,
    padding: '20px 40px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    margin: '0px 4px',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      width: '222px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  }
});

const mobileTab = {
  height: '60px',
  width: '100%',
  background: '#ffffff',
  position: 'fixed',
  zIndex: '20',
  bottom: '50px',
}
class SummaryPage extends React.Component {


  constructor(props) {
    super()
    this.state = {
      username: "",
      shrink: false,
      activeIndex: 0,
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  }

    handleTabChange(event, newValue) {
      this.setState({activeIndex: newValue})
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <Container 
              classes={{
                root: classes.container
              }}>
            <div className="desktop d-none d-md-block">
              <div
                style={{
                  display: 'flex',
                }}
              >
                <VerticalTabs
                  value={this.state.activeIndex}
                  onChange={this.handleTabChange}
                >
                  <MyTab label='Ticket Info' />
                  <MyTab label='Event Schedule' />
                  <MyTab label='Price Detail' />
                  <MyTab label='Event Detail' />
                  <MyTab label='Analytics' />
                  <MyTab label='Attendees Management' />
                </VerticalTabs>

                { this.state.activeIndex === 0 && <TabContainer><TicketInfoComponent /></TabContainer> }
                { this.state.activeIndex === 1 && <TabContainer></TabContainer> }
                { this.state.activeIndex === 2 && <TabContainer></TabContainer> }
              </div>

            </div>
            <div className="mobile d-md-none">

                  <div className="row-margin">
                    <TicketInfoComponent />
                  </div>
                  <div className="row-margin">
                  
                  </div>
                  <div className="row-margin">
                    
                  </div>
                  <div className="row-margin">
                  
                  </div>
                  <div className="row-margin">
                    
                  </div>
              </div>
          </Container>

          <div className="mobile d-md-none">
            <div className="row no-gutters" style={mobileTab}>
                <TabImageOne fill="#4d4d4d" />
                <TabImageTwo />
                <TabImageThree />
            </div>
          </div>

          <Container classes={{root: classes.buttonContainer}} maxWidth={false}>
             
              <Button
                classes={{
                    root: classes.discardButton
                }}
                color="secondary">
                    Discard
                </Button>

                <Button
                    classes={{
                    root: classes.continueButton
                    }}
                    color="secondary">
                        Continue
                </Button>
              
            </Container>
        </div>
      );
    }
}

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column',
    minWidth: '183px',
    minHeight: '877px',
    borderRight: '1px solid #DADADA',
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

function TabContainer(props) {
  return (
      <Typography component="div" style={{ width: '80%', padding: '0px 72px', }}>
        {props.children}
      </Typography>
  );
}

const MyTab = withStyles(theme => ({
  selected: {
    color: theme.palette.primary.main,
    borderRight: '2px solid'+theme.palette.primary.main,
  }
}))(Tab);


export default withStyles(styles)(SummaryPage);