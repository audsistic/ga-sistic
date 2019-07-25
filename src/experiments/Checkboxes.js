import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// import { Typography } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import { ReactComponent as BlueCheck } from '../../src/assets/images/icons/check_blue.svg';
import { ReactComponent as GreyCheck } from '../../src/assets/images/icons/check_grey.svg';

const styles = theme => ({
  checkboxOne: {
      width: '17px',
      height: '17px',
      margin: '7px',
      color: '#666666',
      fill: '#9E9E9E',
  },
  checkedOne: {
       color: '#0080C9 !important',
  },

  //button checkbox
  button: {
    margin: theme.spacing(1),
    borderRadius: '18px',
    // height: '31px',
    width: '7.5vw',
    maxWidth: '108px',
    minWidth: '102px',
    padding: '5px',
    border: '1px solid #979797',
  },
    checkboxTime: {
  },
  formlabel: {
    margin: '0px',
    height: '23px',
    width: '77px',
    color: 'grey',
  }
});

const hrDate = {
  width: '100%',
  height: '1px',
  fill: "#D4D4D4",
}

const eventDate = {
  fontSize: '18px',
  color: '#868686',
  display: 'flex',
  alignItems: 'center',
}

class Checkboxes extends React.Component {


  constructor(props) {
    super()
    this.state = {
        private: true,
        events: [],
        selected: false,
        

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

    componentDidMount() {
      let events = [
        {
          "date": "13 Mar 2019",
          "timings": ["0900", "1200", "2000"]
        },
        {
          "date": "14 Mar 2019",
          "timings": ["0900", "1200", "2000"]
        },
        {
          "date": "15 Mar 2019",
          "timings": ["0900", "1200", "2000"]
        }
      ];
      
      let eventArray = [];
      
      for(var i=0; i<events.length; i++) {
        eventArray.push(events[i])
      }
      
      this.setState({events: eventArray})
    }

    handleChange() {
        this.setState(prevState => ({private: !prevState.private }));
    };

    handleChangeSelect() {
      this.setState(prevState => ({selected: !prevState.selected }));
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="checkbox-components">
          
          <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox 
                    classes={{
                        root: classes.checkboxOne,
                        checked: classes.checkedOne,
                    }}
                    checked={this.state.private} 
                    onChange={this.handleChange} />
                }
                label="Check if this is a private event"
            />
        </FormGroup>
        
            {this.state.events.map((ev, index) => {

              return (
                <FormGroup row>
                  <div style={eventDate}>{ev.date}</div>
                  {ev.timings.map( (time, index) => {
                    
                      return (
                        <Button variant="outlined" color="primary" className={classes.button} key={index}>
                        <FormControlLabel
                          key={index}
                          className={classes.formlabel}
                          control={
                          <Checkbox 
                              key={index}
                              classes={{
                                  root: classes.checkboxTime,
                              }}
                              checked={this.state.selected} 
                              onChange={this.handleChangeSelect} 
                              checkedIcon={<BlueCheck style={{width: '23px', height: '23px', fill: '#007AFF'}} key={index} />}
                              icon={<GreyCheck style={{width: '23px', height: '23px', fill: '#007AFF'}} key={index} />}
                               />}
                               label={time}
                      />

                       {/* <BlueCheck fill="#007AFF" /><span style={timeDiv}>{time}</span> */}
                        </Button>
                        
                      )
                    }
                  )}
                    <hr style={hrDate} />
                  </FormGroup>
                
              )
            })}
        

        </div>
      );
    }
}


export default withStyles(styles)(Checkboxes);