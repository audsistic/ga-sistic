import React from 'react';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import TicketInfoComponent from './TicketInfo';
import EventScheduleComponent from './EventSchedule';
import PriceDetail from './PriceDetail';

import { ReactComponent as TabImageOne } from '../../src/assets/images/icons/tabs/tab_1.svg';
import { ReactComponent as TabImageTwo } from '../../src/assets/images/icons/tabs/tab_2.svg';
import { ReactComponent as TabImageThree } from '../../src/assets/images/icons/tabs/tab_3.svg';
import { ReactComponent as TabImageFour } from '../../src/assets/images/icons/tabs/tab_4.svg';
import { ReactComponent as TabImageFive } from '../../src/assets/images/icons/tabs/tab_5.svg';

const styles = theme => ({
  container: {
    width: 'initial',
    [theme.breakpoints.up('md')]: {
      margin: '50px 72px 0 72px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '40px 4px 0px 4px',
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

class SummaryPage extends React.Component {


  constructor(props) {
    super()
    this.state = {
      username: "",
      shrink: false,
      activeIndex: 2,

      //ticket info
      organiser: "",
      eventName: "",
      type: "",
      private: false,
      venueName: "",
      venueAddress: "",

      //event schedule
      dates: "",
      time: "",
      duration: "",

      //price detail
      venueCap: "",
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.onOrganiserChange = this.onOrganiserChange.bind(this);
    this.onEventNameChange = this.onEventNameChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.onVenueNameChange = this.onVenueNameChange.bind(this);
    this.onVenueAddressChange = this.onVenueAddressChange.bind(this);
    this.onVenueCapChange = this.onVenueCapChange.bind(this);
  }

    handleTabChange(event, newValue) {
      this.setState({activeIndex: newValue})
    }

    // from ticket info page
    onOrganiserChange(event) {
        this.setState({organiser: event.target.value})
    };

    onEventNameChange(event) {
        this.setState({eventName: event.target.value})
    };

    handleTypeChange(event) {
        this.setState({type: event.target.value})
    };

    handleCheckChange() {
        this.setState(prevState => ({private: !prevState.private }));
    };

    onVenueNameChange(event) {
        this.setState({venueName: event.target.value})
    };

    onVenueAddressChange(event) {
        this.setState({venueAddress: event.target.value})
    }

    onVenueCapChange(event) {
      this.setState({venueCap: event.target.value})
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
              <div style={{
                height: '100%',
              }}>
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
              </div>
                

                { this.state.activeIndex === 0 && 
                  <TabContainer>
                    <TicketInfoComponent 
                      //actions
                      onOrganiserChange={this.onOrganiserChange}
                      onEventNameChange={this.onEventNameChange}
                      handleTypeChange={this.handleTypeChange}
                      handleCheckChange={this.handleCheckChange}
                      onVenueNameChange={this.onVenueNameChange}
                      onVenueAddressChange={this.onVenueAddressChange}
                      />
                  </TabContainer> 
                }
                { this.state.activeIndex === 1 && 
                  <TabContainer>
                    <EventScheduleComponent 
                      //from ticket info
                      organiser={this.state.organiser} 
                      eventName={this.state.eventName}
                      type={this.state.type}
                      private={this.state.private}
                      venueName={this.state.venueName}
                      venueAddress={this.state.venueAddress}
                      />
                  </TabContainer> }
                { this.state.activeIndex === 2 && <TabContainer>
                    <PriceDetail 
                      //actions
                      onVenueCapChange={this.onVenueCapChange}

                      //from ticket info
                      organiser={this.state.organiser} 
                      eventName={this.state.eventName}
                      type={this.state.type}
                      private={this.state.private}
                      venueName={this.state.venueName}
                      venueAddress={this.state.venueAddress}

                      //from event schedule
                      dates={this.state.dates}
                      time={this.state.time}
                      duration={this.state.duration}
                    />
                </TabContainer> }
              </div>

            </div>
            <div className="mobile d-md-none">
              <TabPanel value={this.state.activeIndex} index={0}>
                <TicketInfoComponent 
                  onOrganiserChange={this.onOrganiserChange}
                  onEventNameChange={this.onEventNameChange}
                  handleTypeChange={this.handleTypeChange}
                  handleCheckChange={this.handleCheckChange}
                  onVenueNameChange={this.onVenueNameChange}
                  onVenueAddressChange={this.onVenueAddressChange}
                />
              </TabPanel>
              <TabPanel value={this.state.activeIndex} index={1}>
                <EventScheduleComponent
                    organiser={this.state.organiser} 
                    eventName={this.state.eventName}
                    type={this.state.type}
                    private={this.state.private}
                    venueName={this.state.venueName}
                    venueAddress={this.state.venueAddress} />
              </TabPanel>
              <TabPanel value={this.state.activeIndex} index={2}>
                <PriceDetail />
              </TabPanel>
            </div>
          </Container>

          <div className="mobile d-md-none">
            <HorizontalTabs
                value={this.state.activeIndex}
                onChange={this.handleTabChange}
            >
                <Tab icon={<TabImageOne fill="#4d4d4d" />} />
                <Tab icon={<TabImageTwo />} />
                <Tab icon={<TabImageThree />} />
                <Tab icon={<TabImageFour />} />
                <Tab icon={<TabImageFive />} />
            </HorizontalTabs>
          </div>

          <Container classes={{root: classes.buttonContainer}} maxWidth={false}>
             
              <Button
                onClick={ () => this.setState(prevState => ({activeIndex: prevState.activeIndex -1 })) }
                classes={{
                    root: classes.discardButton
                }}
                color="secondary">
                    Discard
                </Button>

                <Button
                    onClick={ () => this.setState(prevState => ({activeIndex: prevState.activeIndex + 1 })) }
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





const HorizontalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'row',
    height: '60px',
    width: '100%',
    background: '#ffffff',
    position: 'fixed',
    zIndex: '20',
    bottom: '50px',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column',
    minWidth: '183px',
    height: '100%',
    minHeight: '723px',
    maxHeight: '877px',
    borderRight: '1px solid #DADADA',
  },
  indicator: {
    display: 'none',
  }
}))(Tabs)

function TabContainer(props) {
  return (
      <Typography component="div" style={{ width: '80%', padding: '0px 72px 100px', }}>
        {props.children}
      </Typography>
  );
}

const MyTab = withStyles(theme => ({
  wrapper: {
    alignItems: 'flex-start',
  },
  selected: {
    color: theme.palette.primary.main,
    borderRight: '2px solid'+theme.palette.primary.main,
  }
}))(Tab);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}


export default withStyles(styles)(SummaryPage);