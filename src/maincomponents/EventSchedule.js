import React from 'react';

import ProgressSummary from '../subcomponents/ProgressSummary';
import ModalDTPicker from '../subcomponents/ModalDateTImePicker';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import { ReactComponent as CalendarIcon } from '../../src/assets/images/icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../../src/assets/images/icons/clock_icon.svg';
import { ReactComponent as ScheduleIcon } from '../../src/assets/images/icons/schedule.svg';


var moment = require('moment');

const styles = theme => ({
    marginRoot: {
        [theme.breakpoints.up('md')]: {
          margin: '7.5px 5.5px 0px 0px',
          width: '45.625vw',
          maxWidth: '243px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '7.5px 0px',
            width: '90.09661vw',
            maxWidth: '373px',
        },
    },
    marginRootSmaller: {
        [theme.breakpoints.up('md')]: {
          margin: '7.5px 11px 7.5px 5.5px',
          width: '45.625vw',
          maxWidth: '191px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '7.5px 0px',
            width: '90.09661vw',
            maxWidth: '373px',
        },
      },
    typoRoot: {
        marginBottom: '20.5px',
        maxWidth: '488px',
    },
    textFieldDate: {
        border: '1px solid #E7E7E7',
        boxShadow: '0px 2px 4px rgba(219, 219, 219, 0.5)',
    },
    inputPropsDate: {
        background: '#FFFFFF',
        height: '71px',
        transform: 'unset',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        '&:hover': {
          background: '#FFFFFF',
          border: '1px solid #0080C9',
        },
      },
      inputLabelShrink: {
          color: '#0080C9 !important',
      },
      inputAdornment: {
        marginTop: '0px !important',
        marginRight: '7px',
        height: '20px',
        width: '20px',
      },
      buttonSchedule: {
          borderRadius: '18px',
          width: '224px',
          color: '#4a4a4a',
      },
      typoRecurring: {
          margin: '25px auto 12px',
      }
});

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
}

const inputNativeBefore = {
    fontSize: '11px',
    textTransform: 'uppercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const inputNativeBeforeDuration = {
    fontSize: '11px',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const inputNativeAfter = {
    fontSize: '16px',
    textTransform: 'lowercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}

class EventSchedule extends React.Component {


  constructor(props) {
    super()
    this.state = {
        dateShrink: false,
        timeShrink: false,
        durationShrink: false,

        //previous page values
        organiser: props.organiser ? props.organiser : "Not specified",
        eventName: props.eventName ? props.eventName: "Not specified",
        type: props.type ? props.type : "Not specified",
        private: props.private ? props.private : "Not specified",
        venueName: props.venueName ? props.venueName : "Not specified",
        venueAddress: props.venueAddress ? props.venueAddress : "Not specified",

        //form values
        startDate: "",
        duration: "Eg. Approximately 1 hr",
        open: false,
    }
    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

    shrinkLabel = (event) => {
        const { onFocus } = this.props;
        if (event.target.id === "date") {
            this.setState({dateShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "time") {
            this.setState({timeShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "duration") {
            this.setState({durationShrink: true});
            if(event.target.value === "Eg. Approximately 1 hr") {
                this.setState({duration: ""})
            }
            onFocus && onFocus(event); 
        }
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        
        if (event.target.id === "date") {
            if(event.target.value.length === 0) {
                this.setState({dateShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "time") {
            if(event.target.value.length === 0) {
                this.setState({timeShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "duration") {
            if(event.target.value.length === 0) {
                this.setState({durationShrink: false, duration: "Eg. Approximately 1 hr",})
            }
            onBlur && onBlur(event); 
        }
    };

    onStartDateChange(event) {
        this.setState({ startDate: moment(event.target.value).format("MM-DD-YYYY") })
    };

    onDurationChange(event) {
        this.setState({ duration: event.target.value })
    }

    handleModalClose() {
        this.setState({open: false});
    }
    
    render() {

      const { classes } = this.props;

      return (
        <div className="event-schedule">
            <ProgressSummary eventSchedule
                  organiser={this.state.organiser}
                  eventName={this.state.eventName}
                  type={this.state.type}
                  private={this.state.private}
                  venueName={this.state.venueName}
                  venueAddress={this.state.venueAddress}
              />
            <div style={
                Object.assign({
                    margin: '48px 0px 18px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Help your patron plan their experience
            </Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                Tell your patron when will your event start and end so they can plan ahead
            </Typography>

            <FormControl classes={{root: classes.marginRoot}}>
              <TextField
                id="date"
                label="Start Date"
                type="date"
                variant="filled"
                defaultValue="DD-MM-YYYY"
                // inputRef={el => this.date = el}
                className={classes.textFieldDate}
                onChange={this.onStartDateChange}
                onFocus={this.shrinkLabel}
                onBlur={this.unShrinkLabel}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    endAdornment: 
                    !this.state.dateShrink && 
                        <InputAdornment 
                            position="end"
                            classes={{positionEnd: classes.inputAdornment}}>
                            <CalendarIcon fill="#000000" />
                        </InputAdornment>,
                    inputProps: {
                        style: this.state.dateShrink ? inputNativeAfter : inputNativeBefore,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                    },
                    shrink: this.state.dateShrink,
                }}
            />
          </FormControl>

          <FormControl classes={{root: classes.marginRootSmaller}}>
              <TextField
                id="time"
                label="Time"
                type="time"
                variant="filled"
                defaultValue="Hour: Min"
                // inputRef={el => this.date = el}
                className={classes.textFieldDate}
                onChange={this.onStartDateChange}
                onFocus={this.shrinkLabel}
                onBlur={this.unShrinkLabel}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    endAdornment: 
                    !this.state.timeShrink && 
                        <InputAdornment 
                            position="end"
                            classes={{positionEnd: classes.inputAdornment}}>
                            <ClockIcon />
                        </InputAdornment>,
                    inputProps: {
                        style: this.state.timeShrink ? inputNativeAfter : inputNativeBefore,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                    },
                    shrink: this.state.timeShrink,
                }}
            />
          </FormControl>
            
        
          <FormControl classes={{root: classes.marginRootSmaller}}>
              <TextField
                id="duration"
                label="Duration"
                type="text"
                variant="filled"
                value={this.state.duration}
                // inputRef={el => this.date = el}
                className={classes.textFieldDate}
                onChange={this.onDurationChange}
                onFocus={this.shrinkLabel}
                onBlur={this.unShrinkLabel}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    inputProps: {
                        style: this.state.durationShrink ? inputNativeAfter : inputNativeBeforeDuration,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                    },
                    shrink: this.state.durationShrink,
                }}
            />
          </FormControl>
            <Typography variant="h4" classes={{ root: classes.typoRecurring, }}>
                Setting up a recurring event?
            </Typography>
            <Button 
                onClick={()=>this.setState({open: true})}
                variant="outlined" 
                classes={{
                    root: classes.buttonSchedule,
                    }}>
                <ScheduleIcon 
                    style={{ marginRight: '5px', }} 
                    fill="#4a4a4a"
                    /> Advance Schedule
            </Button>
            <ModalDTPicker open={this.state.open} handleModalClose={this.handleModalClose} />
        </div>
      );
    }
}


export default withStyles(styles)(EventSchedule);