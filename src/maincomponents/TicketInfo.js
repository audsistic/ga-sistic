import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  marginRoot: {
    [theme.breakpoints.up('md')]: {
      margin: '7.5px 0',
      width: '45.625vw',
      maxWidth: '657px',
    },
    [theme.breakpoints.down('sm')]: {
        margin: '7.5px 0px',
        width: '90.09661vw',
        maxWidth: '373px',
    },
  },
  typoRoot: {
    marginBottom: '20.5px',
  },
  textField: {
    border: '1px solid #E7E7E7',
    boxShadow: '0px 2px 4px rgba(219, 219, 219, 0.5)',
    background: '#FFFFFF',
  },
  textFieldDate: {
    border: '1px solid #E7E7E7',
    boxShadow: '0px 2px 4px rgba(219, 219, 219, 0.5)',
  },
  inputProps: {
    background: '#FFFFFF',
    height: '81px',
    transform: 'unset',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    '&:hover': {
      background: '#FFFFFF',
      border: '1px solid #0080C9',
    },
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
  inputLabel: {
    fontSize: '18px',
    color: '#4d4d4d',
    textDecoration: 'none solid rgb(119, 119, 119)',
    paddingTop: '10px',
    paddingLeft: '88.17px',
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
  inputAdornment: {
    marginTop: '0px !important',
    marginLeft: '10px',

  },
  inputAdornmentDate: {
    marginTop: '0px !important',
    marginRight: '7px',
    
  },

  //select 
  select: {
    background: '#FFFFFF',
    border: '1px solid #E7E7E7',
    boxShadow: '0px 2px 4px rgba(219, 219, 219, 0.5)',
    height: '59px',
  },
  selectInputProps: {
    color: '#4D4D4D',
    paddingLeft: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  selectedItem: {
    minHeight: 0,
    lineHeight: 'normal',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    }
  },
  menulist: {
    color: '#4D4D4D',
  },

  //checkbox
    checkboxLabel: {
        fontFamily: 'Open Sans-Bold',
        fontSize: '12px',
    },
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

    //venue fields
    inputLabelVenue: {
        fontSize: '18px',
        color: '#777777',
        textDecoration: 'none solid rgb(119, 119, 119)',
        padding: '10px 25px 0 25px',

        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            color: '#4d4d4d',
            padding: '5px 0px 0px 14px',
            maxWidth: '318px',
        }
    },
    inputLabelShrink: {
        paddingLeft: '0px',
    },

});

const inputNativeBefore = {
    fontSize: '11px',
    color: '#A1A1A1',
    paddingTop: '32px',
    lineHeight: '1.9090',
}

const inputNativeAfter = {
    fontSize: '16px',
    textTransform: 'lowercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const welcomeHeader = {
    fontSize: '17px',
    lineHeight: 1.3529,
    color: '#000000',
    textDecoration: 'none solid rgb(0, 0, 0)',
}

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
}

const types = ["Concert", "Comedy", "Dance", "Others"];

const MenuProps = {
  PaperProps: {
    style: {
      border: '1px solid #0080C9',
      fontSize: '1rem',
      textDecoration: 'none solid rgb(77, 77, 77)',
      color: '#4D4D4D',
    },
    elevation: 0,
    square: true,
  },
};

class TicketInfo extends React.Component {


  constructor(props) {
    super()
    this.state = {
      orgShrink: false,
      eventNameShrink: false,

      //form labels
      venueAddressLabel: "Venue Address (eg. 10 Eunos Road 8 #03-04...)",
      venueNameLabel: "Venue Name (e.g. The Star Performing Arts Centre)",

      //form info
      organiser: "Tell the patrons who is organising the event",
      eventName: "Tell the patrons who is organising the event",
      type: "",
      private: false,
      venueName: "",
      venueAddress: "",
    }

    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.onOrganiserChange = this.onOrganiserChange.bind(this);
    this.onEventNameChange = this.onEventNameChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.onVenueNameChange = this.onVenueNameChange.bind(this);
    this.onVenueAddressChange = this.onVenueAddressChange.bind(this);
  }


    shrinkLabel = (event) => {
      const { onFocus } = this.props;
      if(event.target.id === "organiser"){
        this.setState({orgShrink: true, organiser: "",});
        onFocus && onFocus(event); 
      } else if (event.target.id === "eventName") {
        this.setState({eventNameShrink: true, eventName: "",});
        onFocus && onFocus(event); 
      } else if (event.target.id === "venueName") {
        this.setState({venueNameLabel: "Venue Name",});
        onFocus && onFocus(event);
      } else if (event.target.id === "venueAddress") {
        this.setState({venueAddressLabel: "Venue Address",});
        onFocus && onFocus(event);
      }
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;

        if(event.target.id === "organiser"){
            if(event.target.value.length === 0) {
                this.setState({orgShrink: false, organiser: "Tell the patrons who is organising the event",})
            }
          onBlur && onBlur(event); 
        } else if (event.target.id === "eventName") {
            if(event.target.value.length === 0) {
                this.setState({eventNameShrink: false, eventName: "Tell the patrons who is organising the event",})
            }
          onBlur && onBlur(event); 
        } else if (event.target.id === "venueName") {
            if(event.target.value.length === 0) {
                this.setState({venueNameLabel: "Venue Name (e.g. The Star Performing Arts Centre)",})
            }
          onBlur && onBlur(event);
        } else if (event.target.id === "venueAddress") {
            if(event.target.value.length === 0) {
                this.setState({venueAddressLabel: "Venue Address (eg. 10 Eunos Road 8 #03-04...)",})
            }
          onBlur && onBlur(event);
        }
    };

    onOrganiserChange(event) {
        this.setState({organiser: event.target.value});
        this.props.onOrganiserChange(event);
    };

    onEventNameChange(event) {
        this.setState({eventName: event.target.value});
        this.props.onEventNameChange(event);
    };

    handleTypeChange(event) {
        this.setState({type: event.target.value});
        this.props.handleTypeChange(event);
    };

    handleCheckChange() {
        this.setState(prevState => ({private: !prevState.private }));
        this.props.handleCheckChange();
    };

    onVenueNameChange(event) {
        this.setState({venueName: event.target.value});
        this.props.onVenueNameChange(event);
    };

    onVenueAddressChange(event) {
        this.setState({venueAddress: event.target.value});
        this.props.onVenueAddressChange(event);
    }

    handlePlaceChanged(){
        const place = this.autocomplete.getPlace();
        this.props.onPlaceLoaded(place);
    }

    render() {

      const { classes } = this.props;
      return (
        <div className="ticket-info">
            <div style={welcomeHeader}>Welcome, John Doe</div>
            <div style={
                Object.assign({
                    margin: '19px 0px 23px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom>Basic Information</Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                Tell us your event detail
            </Typography>

            <FormControl classes={{root: classes.marginRoot}}>
                <TextField
                    id="organiser"
                    label="Organiser"
                    type="text"
                    variant="filled"
                    className={classes.textFieldDate}
                    value={this.state.organiser}
                    // defaultValue={this.state.orgMessage}
                    // inputRef={el => this.date = el}
                    onChange={this.onOrganiserChange}
                    onFocus={this.shrinkLabel}
                    onBlur={this.unShrinkLabel}
                    InputProps={{
                        classes: {
                            root: classes.inputPropsDate,
                        }, 
                        disableUnderline: true,
                        inputProps: {
                            style: this.state.orgShrink ? inputNativeAfter : inputNativeBefore,
                        }
        
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.inputLabelDate,
                            focused: classes.inputLabelFocused,
                        },
                        shrink: this.state.orgShrink,
                    }}
                />
            </FormControl>

            <FormControl classes={{root: classes.marginRoot}}>
                <TextField
                    id="eventName"
                    label="Event Name"
                    type="text"
                    variant="filled"
                    className={classes.textFieldDate}
                    value={this.state.eventName}
                    // defaultValue={this.state.orgMessage}
                    // inputRef={el => this.date = el}
                    onChange={this.onEventNameChange}
                    onFocus={this.shrinkLabel}
                    onBlur={this.unShrinkLabel}
                    InputProps={{
                        classes: {
                            root: classes.inputPropsDate,
                        }, 
                        disableUnderline: true,
                        inputProps: {
                            style: this.state.eventNameShrink ? inputNativeAfter : inputNativeBefore,
                        }
        
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.inputLabelDate,
                            focused: classes.inputLabelFocused,
                        },
                        shrink: this.state.eventNameShrink,
                    }}
                />
            </FormControl>

            <FormControl className={classes.marginRoot}>
                <Select
                value={this.state.type}
                onChange={this.handleTypeChange}
                name="type"
                displayEmpty
                disableUnderline={true}
                classes={{
                    root: classes.select,
                    select: classes.selectInputProps,
                }}
                MenuProps={MenuProps}
                menulistprops={{
                    classes: {
                    root: classes.menulist
                    }
                }}
                >
                    <MenuItem 
                        value="" 
                        classes={{
                        root: classes.selectedItem
                        }}>
                        Type
                    </MenuItem>
                    {types.map(type => (
                        <MenuItem 
                        key={type} 
                        value={type} 
                        classes={{
                            root: classes.selectedItem,
                        }}>
                        {type}
                        </MenuItem>
                    ))}
                    </Select>
            </FormControl>
            
            <FormGroup row>
                <FormControlLabel
                    classes={{
                        root: classes.marginRoot,
                        label : classes.checkboxLabel,
                    }}
                    control={
                    <Checkbox 
                        classes={{
                            root: classes.checkboxOne,
                            checked: classes.checkedOne,
                        }}
                        checked={this.state.private} 
                        onChange={this.handleCheckChange} />
                    }
                    label="Check if this is a private event"
                />
            </FormGroup>
            <div style={
                Object.assign({
                    margin: '51px 0px 22px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom>Where will your event be held</Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                Help your patron to find their way to your event
            </Typography>

                <FormControl classes={{root: classes.marginRoot}}>
                    <TextField
                    id="venueName"
                    label={this.state.venueNameLabel}
                    className={classes.textField}
                    type="search"
                    variant="filled"
                    value={this.state.venueName}
                    onChange={this.onVenueNameChange}
                    onFocus={this.shrinkLabel}
                    onBlur={this.unShrinkLabel}
                    InputProps={{
                        classes: {
                        root: classes.inputProps,
                        }, 
                        disableUnderline: true,
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.inputLabelVenue,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                        },
                        shrink: this.state.venueShrink,
                    }}
                    
                    />
            </FormControl>

            <FormControl classes={{root: classes.marginRoot}}>
                <TextField
                    id="venueAddress"
                    label={this.state.venueAddressLabel}
                    className={classes.textField}
                    type="search"
                    variant="filled"
                    value={this.state.venueAddress}
                    onChange={this.onVenueAddressChange}
                    onFocus={this.shrinkLabel}
                    onBlur={this.unShrinkLabel}
                    InputProps={{
                        classes: {
                        root: classes.inputProps,
                        }, 
                        disableUnderline: true,
                    }}
                    InputLabelProps={{
                        classes: {
                        root: classes.inputLabelVenue,
                        focused: classes.inputLabelFocused,
                        shrink: classes.inputLabelShrink,
                        }
                    }}
                    
                    />
            </FormControl>
            
        </div>
      );
    }
}


export default withStyles(styles)(TicketInfo);