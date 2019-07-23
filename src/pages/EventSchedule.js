import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
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
    gridRow: {
        marginBottom: '45px',
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

const welcomeHeader = {
    fontSize: '17px',
    lineHeight: 1.3529,
    color: '#000000',
    textDecoration: 'none solid rgb(0, 0, 0)',
}

const contentStyle = {
    fontSize: '14px',
    color: '#000000',
    lineHeight: 1.357,
    textDecoration: 'none solid rgb(153, 153, 153)',
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

        //form values
        startDate: "",
        duration: "Eg. Approximately 1 hr",
    }
    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.onStartDateChange = this.onStartDateChange.bind(this);
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
            this.setState({durationShrink: true, duration: "",});
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
        this.setState({ startDate: moment(event.target.value).format('LL') })
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="event-schedule">
            <div style={welcomeHeader}>Welcome, John Doe</div>
            <Typography variant="h1" gutterBottom> 
                {
                    this.props.eventName ? this.props.eventName : "Not specified"
                }</Typography>
            
            <Grid
                container
                direction="row"
                spacing={1}
                justify="flex-start"
                alignItems="center"
                classes={{root: classes.gridRow}}
                >
                <Grid item xs={6} zeroMinWidth> 
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                        classes={{root: classes.gridRow}}
                        >
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Organised by</Typography>
                            <div style={contentStyle}>
                            {
                                this.props.organiser ? this.props.organiser : "Not specified"
                            }
                            </div>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Venue</Typography>
                            <div style={contentStyle}>{
                                this.props.venueName ? this.props.venueName : "Not specified"
                            }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Genre</Typography>
                            <div style={contentStyle}>{
                                this.props.type ? this.props.type : "Not specified"
                            }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} zeroMinWidth> 
                    <div style={{
                        background: 'grey',
                        height: '149px',
                        width: '230px',

                    }}></div>
                </Grid>
            </Grid>

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
                onChange={this.onStartDateChange}
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
            variant="outlined" 
            classes={{
                root: classes.buttonSchedule,
                }}>
            <ScheduleIcon 
                style={{ marginRight: '5px', }} 
                fill="#4a4a4a"
                /> Advance Schedule
        </Button>
        </div>
      );
    }
}


export default withStyles(styles)(EventSchedule);