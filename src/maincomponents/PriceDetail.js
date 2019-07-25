import React from 'react';

import ProgressSummary from '../subcomponents/ProgressSummary';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    marginRoot: {
        [theme.breakpoints.up('md')]: {
          margin: '7.5px 5.5px 0px 0px',
          width: '22.22222vw',
          maxWidth: '320px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '7.5px 0px',
            width: '90.09661vw',
            maxWidth: '373px',
        },
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
});

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
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

class PriceDetail extends React.Component {


  constructor(props) {
    super()
    this.state = {
        venueShrink: false,

        //previous page values
        organiser: props.organiser ? props.organiser : "Not specified",
        eventName: props.eventName ? props.eventName: "Not specified",
        type: props.type ? props.type : "Not specified",
        private: props.private ? props.private : "Not specified",
        venueName: props.venueName ? props.venueName : "Not specified",
        venueAddress: props.venueAddress ? props.venueAddress : "Not specified",
        dates: props.dates ? props.dates : "Not specified",
        time: props.time ? props.time : "Not specified",

        //form values
        venue: "Maximum 500pax (defined by venue)",

    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="price-detail">
            <ProgressSummary priceDetail
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
                time={this.state.time}
              />

            <div style={
                Object.assign({
                    margin: '59px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Total Venue Capacity
            </Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                How many participants can your selected venue fit
            </Typography>
            
            <FormControl classes={{root: classes.marginRoot}}>
              <TextField
                id="venue"
                label="Venue"
                type="text"
                variant="filled"
                value={this.state.venue}
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
                        style: this.state.venueShrink ? inputNativeAfter : inputNativeBeforeDuration,
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

        </div>
      );
    }
}


export default withStyles(styles)(PriceDetail);