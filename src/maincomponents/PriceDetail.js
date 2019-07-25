import React from 'react';

import ProgressSummary from '../subcomponents/ProgressSummary';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import { ReactComponent as SeatsIcon } from '../../src/assets/images/icons/seats.svg';

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
    marginTicketType: {
        [theme.breakpoints.up('md')]: {
            margin: '7.5px 5.5px 0px 0px',
            width: '26.805556vw',
            maxWidth: '386px',
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
      inputLabelDate: {
        fontSize: '16px',
        color: '#4d4d4d',
        textDecoration: 'none solid rgb(119, 119, 119)',
      },
      inputLabelFocused: {
        color: '#0080C9 !important',
        padding: '0px',
      },
      typoHoldSeats: {
        fontSize: '23px',
        margin: '43px auto 20px',
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
        venueCapShrink: false,
        ticketTypeShrink: false,

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
        venueCap: "Maximum 500pax (defined by venue)",
        ticketType: "eg. General Admission",

    }
    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.onVenueCapChange = this.onVenueCapChange.bind(this);
    this.onTicketTypeChange = this.onTicketTypeChange.bind(this);
  }

    shrinkLabel = (event) => {
        const { onFocus } = this.props;
        if (event.target.id === "venueCap") {
            this.setState({venueCapShrink: true});
            if(event.target.value === "Maximum 500pax (defined by venue)") {
                this.setState({venueCap: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "ticketType") {
            this.setState({ticketTypeShrink: true});
            if(event.target.value === "eg. General Admission") {
                this.setState({ticketType: ""})
            }
            onFocus && onFocus(event); 
        } 
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        
        if (event.target.id === "venueCap") {
            if(event.target.value.length === 0) {
                this.setState({venueCapShrink: false, venueCap: "Maximum 500pax (defined by venue)",})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "ticketType") {
            if(event.target.value.length === 0) {
                this.setState({ticketTypeShrink: false, ticketType: "eg. General Admission",})
            }
            onBlur && onBlur(event); 
        } 
    };

    onVenueCapChange(event) {
        this.setState({venueCap: event.target.value});
        this.props.onVenueCapChange(event);
    }

    onTicketTypeChange(event) {
        this.setState({ticketType: event.target.value});
        // this.props.onTicketTypeChange(event);
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
              />

            <div style={
                Object.assign({
                    margin: '59px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Total Venue Capacity
            </Typography>
            <Typography variant="h4" gutterBottom classes={{ root: classes.typoRoot, }}>
                How many participants can your selected venue fit
            </Typography>
            
            <FormControl classes={{root: classes.marginRoot}}>
              <TextField
                id="venueCap"
                label="Venue Capacity"
                type="text"
                variant="filled"
                value={this.state.venueCap}
                className={classes.textFieldDate}
                onChange={this.onVenueCapChange}
                onFocus={this.shrinkLabel}
                onBlur={this.unShrinkLabel}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    inputProps: {
                        style: this.state.venueCapShrink ? inputNativeAfter : inputNativeBeforeDuration,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                    },
                    shrink: this.state.venueCapShrink,
                }}
            />
          </FormControl>
          <Typography
            classes={{
                root: classes.typoHoldSeats
            }}
          >
            <SeatsIcon /> Need to put some seats on hold?
          </Typography>
        
          <div style={
                Object.assign({
                    margin: '59px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Ticket Type
            </Typography>
            <Typography variant="h4" gutterBottom classes={{ root: classes.typoRoot, }}>
                How many participants can your selected venue fit
            </Typography>

          <FormControl classes={{root: classes.marginTicketType}}>
              <TextField
                id="ticketType"
                label="Type of Ticket"
                type="text"
                variant="filled"
                value={this.state.ticketType}
                className={classes.textFieldDate}
                onChange={this.onTicketTypeChange}
                onFocus={this.shrinkLabel}
                onBlur={this.unShrinkLabel}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    inputProps: {
                        style: this.state.ticketTypeShrink ? inputNativeAfter : inputNativeBeforeDuration,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                    },
                    shrink: this.state.ticketTypeShrink,
                }}
            />
          </FormControl>

        </div>
      );
    }
}


export default withStyles(styles)(PriceDetail);