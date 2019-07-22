import React from 'react';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TicketInfoComponent from './TicketInfo';

const styles = theme => ({
});

class ComponentTest extends React.Component {


  constructor(props) {
    super()
    this.state = {
      tabs: [""],
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

      return (
        <div className="components">
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
                <MyTab label='Inputs' />
                <MyTab label='Checkboxes' />
                <MyTab label='Modal' />
                <MyTab label='Cards' />
                <MyTab label='Uploads' />
              </VerticalTabs>

              { this.state.activeIndex === 0 && <TabContainer><TicketInfoComponent /></TabContainer> }
              { this.state.activeIndex === 1 && <TabContainer></TabContainer> }
              { this.state.activeIndex === 2 && <TabContainer></TabContainer> }
            </div>
          </div>
          <div className="mobile d-md-none">
              <div>Welcome, John Doe</div>
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
      <Typography component="div" style={{ width: '80%', padding: '0px 72px' }}>
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


export default withStyles(styles)(ComponentTest);