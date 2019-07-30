import React from 'react';

import ProgressSummary from '../subcomponents/ProgressSummary';
import ModalDiscount from '../subcomponents/ModalDiscount';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'; 
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as SeatsIcon } from '../../src/assets/images/icons/seats.svg';
import { ReactComponent as CalendarIcon } from '../../src/assets/images/icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../../src/assets/images/icons/clock_icon.svg';
import { ReactComponent as DiscountIcon } from '../../src/assets/images/icons/discount.svg';
import { ReactComponent as ScheduleIcon } from '../../src/assets/images/icons/schedule.svg';

const styles = theme => ({
    marginVenueCap: {
        [theme.breakpoints.up('md')]: {
          margin: '18px 5.5px 0px 0px',
          width: '23.8889vw',
          maxWidth: '344px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '7.5px 0px',
            width: '90.09661vw',
            maxWidth: '373px',
        },
    },
    marginHowMany: {
        [theme.breakpoints.up('md')]: {
            margin: '0px 20px 0px 0px',
            width: '18.05556vw',
            maxWidth: '260px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginHoldReason: {
        [theme.breakpoints.up('md')]: {
            margin: '0px 20px 0px 0px',
            width: '30.7638889vw',
            maxWidth: '443px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginTicketType: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 19px 0px 0px',
            width: '26.805556vw',
            maxWidth: '386px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginPrice: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 19px 0px 0px',
            width: '10.277778vw',
            maxWidth: '148px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginDate: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 19px 0px 0px',
            width: '27.916667vw',
            maxWidth: '402px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginTime: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 19px 0px 0px',
            width: '21.388889vw',
            maxWidth: '308px',
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

      typeButton: {
        color: 'white',
        backgroundColor: '#0080c9',
        height: '56px',
        borderRadius: '0px',
        '&:hover': {
          background: theme.palette.primary.dark,
        },
        [theme.breakpoints.up('md')]: {
          width: '187px',
        },
        [theme.breakpoints.down('sm')]: {
          width: '134px',
        }
    },
    grid: {
        maxWidth: '723px',
        marginTop: '16px',
    },
    buttonDiscount: {
        borderRadius: '18px',
        width: '198px',
        color: '#4a4a4a',
        fontSize: '16px',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: '#ffffff',
          },
    },
    buttonSpecial: {
        borderRadius: '18px',
        width: '278px',
        color: '#4a4a4a',
        fontSize: '16px',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: '#ffffff',
          },
    },
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

const buttonHeader = {
    fontSize: '16px',
    fontFamily: 'Open Sans-Bold',
    fontWeight: 700,
    color: '#404040',
    minWidth: '272px',
    maxWidth: '289px',
    marginBottom: '18px',
}



//Placeholer texts for inputs
const placeholderText = {
    venueCap: "Maximum 500pax (defined by venue)",
    holdSeats: "0-500",
    holdReason: "eg. For VIP",
    ticketType: "eg. General Admission",
    price: "eg. 4.50",
    capacity: "eg. 100",
}

class PriceDetail extends React.Component {


  constructor(props) {
    super()
    this.state = {
        venueCapShrink: false,
        holdSeatsShrink: false,
        holdReasonShrink: false,
        ticketTypeShrink: false,
        priceShrink: false,
        capacityShrink: false,
        startDateShrink: false,
        startTimeShrink: false,
        stopDateShrink: false,
        stopTimeShrink: false,

        //discount & pricing button/modal
        discountHover: false,
        specialHover: false,
        discountOpen: false,
        specialOpen: false,

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
        venueCap: placeholderText.venueCap,
        holdSeats: placeholderText.holdSeats,
        holdReason: placeholderText.holdReason,
        ticketType: placeholderText.ticketType,
        price: placeholderText.price,
        capacity: placeholderText.capacity,
        startDate: new Date(),
        startTime: "",
        stopDate: new Date(),
        stopTime: "",
    
    }

    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.onVenueCapChange = this.onVenueCapChange.bind(this);
    this.onHoldSeatsChange = this.onHoldSeatsChange.bind(this);
    this.onHoldReasonChange = this.onHoldReasonChange.bind(this);
    this.onTicketTypeChange = this.onTicketTypeChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onCapacityChange = this.onCapacityChange.bind(this);

    this.handleDiscountModalClose = this.handleDiscountModalClose.bind(this);
  }

    shrinkLabel = (event) => {
        const { onFocus } = this.props;
        if (event.target.id === "venueCap") {
            this.setState({venueCapShrink: true});
            if(event.target.value === placeholderText.venueCap) {
                this.setState({venueCap: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "holdSeats") {
            this.setState({holdSeatsShrink: true});
            if(event.target.value === placeholderText.holdSeats) {
                this.setState({holdSeats: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "holdReason") {
            this.setState({holdReasonShrink: true});
            if(event.target.value === placeholderText.holdReason) {
                this.setState({holdReason: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "ticketType") {
            this.setState({ticketTypeShrink: true});
            if(event.target.value === placeholderText.ticketType) {
                this.setState({ticketType: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "price") {
            this.setState({priceShrink: true});
            if(event.target.value === placeholderText.price) {
                this.setState({price: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "capacity") {
            this.setState({capacityShrink: true});
            if(event.target.value === placeholderText.capacity) {
                this.setState({capacity: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "startDate") {
            this.setState({startDateShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "startTime") {
            this.setState({startTimeShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "stopDate") {
            this.setState({stopDateShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "stopTime") {
            this.setState({stopTimeShrink: true});
            onFocus && onFocus(event); 
        } 
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        
        if (event.target.id === "venueCap") {
            if(event.target.value.length === 0) {
                this.setState({venueCapShrink: false, venueCap: placeholderText.venueCap,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "holdSeats") {
            if(event.target.value.length === 0) {
                this.setState({holdSeatsShrink: false, holdSeats: placeholderText.holdSeats,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "holdReason") {
            if(event.target.value.length === 0) {
                this.setState({holdReasonShrink: false, holdReason: placeholderText.holdReason,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "ticketType") {
            if(event.target.value.length === 0) {
                this.setState({ticketTypeShrink: false, ticketType: placeholderText.ticketType,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "price") {
            if(event.target.value.length === 0) {
                this.setState({priceShrink: false, price: placeholderText.price,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "capacity") {
            if(event.target.value.length === 0) {
                this.setState({capacityShrink: false, capacity: placeholderText.capacity,})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "startDate") {
            if(event.target.value.length === 0) {
                this.setState({startDateShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "startTime") {
            if(event.target.value.length === 0) {
                this.setState({startTimeShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "stopDate") {
            if(event.target.value.length === 0) {
                this.setState({stopDateShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "stopTime") {
            if(event.target.value.length === 0) {
                this.setState({stopTimeShrink: false})
            }
            onBlur && onBlur(event); 
        } 
    };

    onVenueCapChange(event) {
        this.setState({venueCap: event.target.value});
        this.props.onVenueCapChange(event);
    }

    onHoldSeatsChange(event) {
        this.setState({holdSeats: event.target.value});
    }

    onHoldReasonChange(event) {
        this.setState({holdReason: event.target.value});
    }

    onTicketTypeChange(event) {
        this.setState({ticketType: event.target.value});
        // this.props.onTicketTypeChange(event);
    }

    onPriceChange(event) {
        this.setState({price: event.target.value});
    }

    onCapacityChange(event) {
        this.setState({capacity: event.target.value});
    }

    handleDiscountModalClose() {
        this.setState({discountOpen: false});
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
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                How many participants can your selected venue fit
            </Typography>
            
            <FormControl classes={{root: classes.marginVenueCap}}>
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
            
            <FormGroup row>
                <FormControl classes={{root: classes.marginHowMany}}>
                    <TextField
                        id="holdSeats"
                        label="No. of seats to hold"
                        type={this.state.holdSeats === placeholderText.holdSeats ? "text" : "number"}
                        variant="filled"
                        value={this.state.holdSeats}
                        className={classes.textFieldDate}
                        onChange={this.onHoldSeatsChange}
                        onFocus={this.shrinkLabel}
                        onBlur={this.unShrinkLabel}
                        InputProps={{
                            classes: {
                                root: classes.inputPropsDate,
                            }, 
                            disableUnderline: true,
                            inputProps: {
                                style: this.state.holdSeatsShrink ? inputNativeAfter : inputNativeBeforeDuration,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.holdSeatsShrink,
                        }}
                    />
                </FormControl>

                <FormControl classes={{root: classes.marginHoldReason}}>
                    <TextField
                        id="holdReason"
                        label="Reason to hold"
                        type="text"
                        variant="filled"
                        value={this.state.holdReason}
                        className={classes.textFieldDate}
                        onChange={this.onHoldReasonChange}
                        onFocus={this.shrinkLabel}
                        onBlur={this.unShrinkLabel}
                        InputProps={{
                            classes: {
                                root: classes.inputPropsDate,
                            }, 
                            disableUnderline: true,
                            inputProps: {
                                style: this.state.holdReasonShrink ? inputNativeAfter : inputNativeBeforeDuration,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.holdReasonShrink,
                        }}
                    />
                </FormControl>
            </FormGroup>
          


          <div style={
                Object.assign({
                    margin: '59px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Ticket Type
            </Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                How many participants can your selected venue fit
            </Typography>
                <Grid container direction="row">
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
                    <FormControl classes={{root: classes.marginPrice}}>
                        <TextField
                            id="price"
                            label="Price (in SGD)"
                            type={this.state.price === placeholderText.price ? "text" : "number"}
                            variant="filled"
                            value={this.state.price}
                            className={classes.textFieldDate}
                            onChange={this.onPriceChange}
                            onFocus={this.shrinkLabel}
                            onBlur={this.unShrinkLabel}
                            InputProps={{
                                classes: {
                                    root: classes.inputPropsDate,
                                }, 
                                disableUnderline: true,
                                startAdornment: 
                                this.state.priceShrink && 
                                    <InputAdornment 
                                        position="start"
                                        classes={{positionStart: classes.inputAdornment}}>
                                        $
                                    </InputAdornment>,
                                inputProps: {
                                    style: this.state.priceShrink ? inputNativeAfter : inputNativeBeforeDuration,
                                    step: '0.01',
                                }
                
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabelDate,
                                    focused: classes.inputLabelFocused,
                                    shrink: classes.inputLabelShrink,
                                },
                                shrink: this.state.priceShrink,
                            }}
                        />
                    </FormControl>
                    <FormControl required classes={{root: classes.marginPrice}}>
                        <TextField
                            id="capacity"
                            label="Capacity"
                            type={this.state.capacity === placeholderText.capacity ? "text" : "number"}
                            variant="filled"
                            value={this.state.capacity}
                            className={classes.textFieldDate}
                            onChange={this.onCapacityChange}
                            onFocus={this.shrinkLabel}
                            onBlur={this.unShrinkLabel}
                            InputProps={{
                                classes: {
                                    root: classes.inputPropsDate,
                                }, 
                                disableUnderline: true,
                                inputProps: {
                                    style: this.state.capacityShrink ? inputNativeAfter : inputNativeBeforeDuration,
                                }
                
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.inputLabelDate,
                                    focused: classes.inputLabelFocused,
                                    shrink: classes.inputLabelShrink,
                                },
                                shrink: this.state.capacityShrink,
                            }}
                        />
                    </FormControl>
                </Grid>
            <Grid container direction="row" justify="flex-end" 
                classes={{ root: classes.grid}}>
                <Button classes={{
                    root: classes.typeButton
                }}>Add Ticket Type</Button>
            </Grid>
                
        <div style={
                Object.assign({
                    margin: '38px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Ticket Sales Schedule
            </Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                Manage your ticket sales schedule by setting the start and stop date
            </Typography>
            <Grid container direction="row">
                <FormControl classes={{root: classes.marginDate}}>
                    <TextField
                        id="startDate"
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
                            !this.state.startDateShrink && 
                                <InputAdornment 
                                    position="end"
                                    classes={{positionEnd: classes.inputAdornment}}>
                                    <CalendarIcon fill="#000000" />
                                </InputAdornment>,
                            inputProps: {
                                style: this.state.startDateShrink ? inputNativeAfter : inputNativeBefore,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.startDateShrink,
                        }}
                    />
                </FormControl>
                <FormControl classes={{root: classes.marginTime}}>
                    <TextField
                        id="startTime"
                        label="Start Time"
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
                            !this.state.startTimeShrink && 
                                <InputAdornment 
                                    position="end"
                                    classes={{positionEnd: classes.inputAdornment}}>
                                    <ClockIcon />
                                </InputAdornment>,
                            inputProps: {
                                style: this.state.startTimeShrink ? inputNativeAfter : inputNativeBefore,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.startTimeShrink,
                        }}
                    />
                </FormControl>
            </Grid>
            

            <Grid container direction="row">
                <FormControl classes={{root: classes.marginDate}}>
                    <TextField
                        id="stopDate"
                        label="Stop Date"
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
                            !this.state.stopDateShrink && 
                                <InputAdornment 
                                    position="end"
                                    classes={{positionEnd: classes.inputAdornment}}>
                                    <CalendarIcon fill="#000000" />
                                </InputAdornment>,
                            inputProps: {
                                style: this.state.stopDateShrink ? inputNativeAfter : inputNativeBefore,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.stopDateShrink,
                        }}
                    />
                </FormControl>
                <FormControl classes={{root: classes.marginTime}}>
                    <TextField
                        id="stopTime"
                        label="Stop Time"
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
                            !this.state.stopTimeShrink && 
                                <InputAdornment 
                                    position="end"
                                    classes={{positionEnd: classes.inputAdornment}}>
                                    <ClockIcon />
                                </InputAdornment>,
                            inputProps: {
                                style: this.state.stopTimeShrink ? inputNativeAfter : inputNativeBefore,
                            }
            
                        }}
                        InputLabelProps={{
                            classes: {
                                root: classes.inputLabelDate,
                                focused: classes.inputLabelFocused,
                                shrink: classes.inputLabelShrink,
                            },
                            shrink: this.state.stopTimeShrink,
                        }}
                    />
                </FormControl>
            </Grid>

            <div style={
                Object.assign({
                    margin: '78px 0px 25px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Additional Discount & Special Pricing
            </Typography>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <div style={buttonHeader}>
                            Need to set up special discount like Early Bird Specials?
                        </div>
                        <Button 
                            onMouseOver={() => this.setState({discountHover: true})}
                            onMouseLeave={() => this.setState({discountHover: false})}
                            onClick={()=>this.setState({discountOpen: true})}
                            variant="outlined" 
                            classes={{
                                root: classes.buttonDiscount,
                                }}>
                            <DiscountIcon 
                                style={{ marginRight: '5px', }} 
                                fill={this.state.discountHover ? "#ffffff" : "#4a4a4a"}
                                /> Set Up Discount
                        </Button>
                    </Grid>
                        
                    <Grid item xs={6}>
                    <div style={buttonHeader}>
                        Set up special price on specific day and time?
                    </div>
                        <Button 
                        onMouseOver={() => this.setState({specialHover: true})}
                        onMouseLeave={() => this.setState({specialHover: false})}
                        onClick={()=>this.setState({open: true})}
                        variant="outlined" 
                        classes={{
                            root: classes.buttonSpecial,
                            }}>
                        <ScheduleIcon 
                            style={{ marginRight: '5px', }} 
                            fill={this.state.specialHover ? "#ffffff" : "#4a4a4a"}
                            /> Set Up Special Ticket Price
                        </Button>
                    </Grid>
                </Grid>
                <ModalDiscount open={this.state.discountOpen} handleDiscountModalClose={this.handleDiscountModalClose} />
        </div>
      );
    }
}


export default withStyles(styles)(PriceDetail);