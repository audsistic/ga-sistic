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
import CardComponent from './Cards';
import UploadComponent from './Uploads';

const styles = theme => ({
});

class ComponentTest extends React.Component {


  constructor(props) {
    super()
    this.state = {
      tabs: ["Buttons", "Inputs", "Checkboxes", "Modal", "Cards", "Uploads"],
      username: "",
      shrink: false,
      activeIndex: 5,
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
                <MyTab label='Cards' />
                <MyTab label='Uploads' />
              </VerticalTabs>

              { this.state.activeIndex === 0 && <TabContainer><ButtonComponent /></TabContainer> }
              { this.state.activeIndex === 1 && <TabContainer><InputComponent /></TabContainer> }
              { this.state.activeIndex === 2 && <TabContainer><CheckboxComponent /></TabContainer> }
              { this.state.activeIndex === 3 && <TabContainer><ModalComponent /></TabContainer> }
              { this.state.activeIndex === 4 && <TabContainer><CardComponent /></TabContainer> }
              { this.state.activeIndex === 5 && <TabContainer><UploadComponent /></TabContainer> }
            </div>
          </div>
          <div className="mobile d-md-none">
              <div>Welcome, John Doe</div>
                <div className="row-margin">
                  <InputComponent />
                </div>
                <div className="row-margin">
                  <ButtonComponent />
                </div>
                <div className="row-margin">
                  <CheckboxComponent />
                </div>
                <div className="row-margin">
                  <ModalComponent />
                </div>
                <div className="row-margin">
                  <CardComponent />
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