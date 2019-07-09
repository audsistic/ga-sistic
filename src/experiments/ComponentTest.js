import React from 'react';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import ButtonComponent from './Buttons';
import InputComponent from './Inputs';
import CheckboxComponent from './Checkboxes';

const styles = theme => ({
});

class ComponentTest extends React.Component {


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

      return (
        <div className="components">


      <div
        style={{
          display: 'flex',
        }}
      >
        <VerticalTabs
          value={this.state.activeIndex}
          onChange={this.handleTabChange}
        >
          <MyTab label='Buttons' />
          <MyTab label='Inputs' />
          <MyTab label='Checkboxes' />
        </VerticalTabs>

        { this.state.activeIndex === 0 && <TabContainer><ButtonComponent /></TabContainer> }
        { this.state.activeIndex === 1 && <TabContainer><InputComponent /></TabContainer> }
        { this.state.activeIndex === 2 && <TabContainer><CheckboxComponent /></TabContainer> }
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
    <Typography component="div" style={{ padding: 24 }}>
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