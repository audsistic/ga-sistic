import React from 'react';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import ButtonComponent from './Buttons';
import InputComponent from './Inputs';
import CheckboxComponent from './Checkboxes';
import ModalComponent from './Modal';

const styles = theme => ({
});

class ComponentTest extends React.Component {


  constructor(props) {
    super()
    this.state = {
      username: "",
      shrink: false,
      activeIndex: 1,
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
                <MyTab label='Buttons' />
                <MyTab label='Inputs' />
                <MyTab label='Checkboxes' />
                <MyTab label='Modal' />
              </VerticalTabs>

              { this.state.activeIndex === 0 && <TabContainer><ButtonComponent /></TabContainer> }
              { this.state.activeIndex === 1 && <TabContainer><InputComponent /></TabContainer> }
              { this.state.activeIndex === 2 && <TabContainer><CheckboxComponent /></TabContainer> }
              { this.state.activeIndex === 3 && <TabContainer><ModalComponent /></TabContainer> }
            </div>
          </div>
          <div className="mobile d-md-none">
              <div>Welcome, John Doe</div>
              <div>
                <InputComponent />
                <ButtonComponent />
                <CheckboxComponent />
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