import React, { Component } from 'react';

import StaticDatePicker from './StaticDatePicker';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ReactComponent as ClockIcon } from '../../src/assets/images/icons/clock_icon.svg';

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
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
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

class ModalDTPicker extends Component {

    constructor(props) {
        super()
        this.state = {
            date: "",
        }

        this.changeDate = this.changeDate.bind(this);
    }


    changeDate() {
        this.setState({date: ""})
    }

    render() {

        const { classes } = this.props;

        return (
            <Dialog
                onClose={this.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
                >
                <DialogContent>
                    <div style={
                        Object.assign({
                            margin: '35px 0px 24px',
                        }, gradientDiv)}>
                    </div>
                    <Typography variant="h1">Set Recurring Event</Typography>
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={this.props.handleModalClose}>
                        <CloseIcon />
                    </IconButton>
                
                    <Typography>Please Select Dates</Typography>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                        <StaticDatePicker />
                    </MuiPickersUtilsProvider>

                    <Typography>Please Select Time</Typography> 
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
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(ModalDTPicker);