import React, { Component } from 'react';

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

import { withStyles } from '@material-ui/core/styles';
import {  ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, FormGroup } from "@material-ui/core"; 
import { Typography } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as ClockIcon } from '../../src/assets/images/icons/clock_icon.svg';
import { ReactComponent as DeleteIcon } from '../../src/assets/images/icons/dustbin.svg';
import { ReactComponent as EditIcon } from '../../src/assets/images/icons/pencil.svg';

var moment = require('moment');

const styles = theme => ({

    dialogContentRoot: {
        padding: '0px',
    },
    marginRoot: {
        [theme.breakpoints.up('md')]: {
          margin: '7.5px 5.5px 0px 0px',
          width: '31.1805555vw',
          maxWidth: '449px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '7.5px 0px',
            width: '90.09661vw',
            maxWidth: '373px',
        },
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
    selectDates: {
        marginTop: '44px',
    },
    inputPropsDate: {
    background: '#FFFFFF',
    height: '71px',
    transform: 'unset',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    boxShadow: '0px 2px 4px rgba(219,219,219,0.5)',
    border: '1px solid #e7e7e7',
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
      eventsButton: {
          color: 'white',
          backgroundColor: '#0080c9',
          width: '222px',
          height: '56px',
          borderRadius: '0px',
          '&:hover': {
            background: theme.palette.primary.dark,
          },
          [theme.breakpoints.up('md')]: {
            width: '222px',
          },
          [theme.breakpoints.down('sm')]: {
            width: '134px',
          }
      },
      formGroup: {
          alignItems: 'flex-end',
          justifyContent: 'space-between',
      },
      topGrid: {
        padding: '19px 18px 48px 31px',
      },
      divider: {
        height: '2px',
        background: 'linear-gradient(to right, #0080c9, #c86dd7)',
      },
      bottomGrid: {
          backgroundColor: '#f7f7f7',
          padding: '16px 28px 21px 40px',
      },
      buttonDelete: {
        borderRadius: '18px',
        width: '122px',
        height: '35px',
        color: '#4a4a4a',
        border: '1px solid #979797',
        margin: '0px 4px',
    },
    buttonEdit: {
        borderRadius: '18px',
        width: '100px',
        height: '35px',
        color: '#4a4a4a',
        border: '1px solid #979797',
        margin: '0px 4px',
    },
    buttonLabel: {
        margin: 'auto',
        height: '100%',
    }
})

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

const inputNativeAfter = {
    fontSize: '16px',
    textTransform: 'lowercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const eventDatesHeader = {
    fontSize: '12px',
    fontFamily: 'Open Sans-Bold',
}

const eventDatesText = {
    fontSize: '19px',
}

const defaultMaterialTheme = createMuiTheme({
    palette: {
        primary: {
          main: '#a0d1ee',
        },
    },
    overrides: {
        MuiPickersStaticWrapper: {
            staticWrapperRoot: {
                width: '683px',
            }
        },
        MuiPickersBasePicker: {
            pickerView: {
                maxWidth: '683px',
                width: '47.4305556vw',
            }
        },
        MuiPickersCalendarHeader: {
            daysHeader: {
                justifyContent: 'space-between',
            },
        },
        MuiPickersCalendar: {
            week: {
                justifyContent: 'space-between',
            }
        }
        
    }
});

  
class ModalDTPicker extends Component {

    constructor(props) {
        super()
        this.state = {
            //adjusting elements
            timeShrink: false,

            date: new Date(),
        }

        this.shrinkLabel = this.shrinkLabel.bind(this);
        this.unShrinkLabel = this.unShrinkLabel.bind(this);
        this.changeDate = this.changeDate.bind(this);
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


    changeDate(date) {
        this.setState({date})
    }

    render() {

        const { classes } = this.props;

        return (
            <Dialog
                onClose={this.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
                maxWidth={false}
                PaperProps={{
                    square: true,
                }}
                >
                <DialogContent classes={{
                    root: classes.dialogContentRoot,
                }}>
                <Grid
                        container
                        direction="column"
                        classes={{
                            root: classes.topGrid
                        }}
                        > 
                    <div style={
                        Object.assign({
                            margin: '35px 0px 24px',
                        }, gradientDiv)}>
                    </div>
                    <Typography variant="h1">Set Recurring Event</Typography>
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={this.props.handleModalClose}>
                        <CloseIcon />
                    </IconButton>
                
                    <Typography classes={{
                        root: classes.selectDates
                    }}>Please Select Dates</Typography>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <ThemeProvider theme={defaultMaterialTheme}>
                            <DatePicker
                                autoOk
                                disablePast
                                disableToolbar
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={this.state.date}
                                onChange={this.changeDate}
                            />
                        </ThemeProvider>
                    </MuiPickersUtilsProvider>

                    <Typography>Please Select Time</Typography> 
                    <FormGroup classes={{
                            root: classes.formGroup
                        }} row>
                        <FormControl classes={{root: classes.marginRoot}}>
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
                        <Button classes={{
                                root: classes.eventsButton
                            }}>+ Add Events</Button>
                    </FormGroup>
                    </Grid>
                    <Grid direction="row" className={classes.divider}></Grid>
                    <Grid
                        container
                        direction="row"
                        // justify="center"
                        alignItems="center"
                        classes={{
                            root: classes.bottomGrid
                        }}
                        > 
                            <Grid xs={6}>
                                <div style={eventDatesHeader}>Event Dates</div>
                                <div style={eventDatesText}>04/05/2019 ~ 05/05/2019</div>
                            </Grid>
                            <Grid xs={6} 
                                container 
                                justify="flex-end"
                                alignItems="center">
                                <Button 
                                    variant="outlined" 
                                    classes={{
                                        root: classes.buttonDelete,
                                        label: classes.buttonLabel,
                                        }}>
                                    <DeleteIcon 
                                        style={{ marginRight: '5px', }} 
                                        fill="#4a4a4a"
                                        /> Delete
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    classes={{
                                        root: classes.buttonEdit,
                                        label: classes.buttonLabel,
                                        }}>
                                    <EditIcon 
                                        style={{ marginRight: '5px', }} 
                                        fill="#4a4a4a"
                                        /> Edit
                                </Button>
                            </Grid>
                            
                    </Grid>
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(ModalDTPicker);