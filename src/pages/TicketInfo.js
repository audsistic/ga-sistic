import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { ReactComponent as SearchIcon } from '../../src/assets/images/icons/search.svg';

var moment = require('moment');

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
    color: '#777777',
    textDecoration: 'none solid rgb(119, 119, 119)',
    paddingTop: '10px',
    paddingLeft: '88.17px',
  },
  inputLabelDate: {
    fontSize: '16px',
    color: '#777777',
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
  //multiline
  inputPropsMulti: {
    background: '#FFFFFF',
    height: '382px',
    transform: 'unset',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    '&:hover': {
      background: '#FFFFFF',
      border: '1px solid #0080C9',
    },
  },
  //search
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchRoot: {
    height: '71px',
    width: '654px',
  }
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

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
    margin: '19px 0px',
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
      //form info
      organiser: "Tell the patrons who is organising the event",
      eventName: "Tell the patrons who is organising the event",
      type: "",
      private: true,
    }

    this.shrinkLabel = this.shrinkLabel.bind(this);
    this.unShrinkLabel = this.unShrinkLabel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onOrganiserChange = this.onOrganiserChange.bind(this);
    this.onEventNameChange = this.onEventNameChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

    shrinkLabel = (event) => {
      const { onFocus } = this.props;
      if(event.target.id === "organiser"){
        this.setState({orgShrink: true, organiser: "",});
        onFocus && onFocus(event); 
      } else if(event.target.id === "eventName") {
        this.setState({eventNameShrink: true, eventName: "",});
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
        } 
    };

    onOrganiserChange(event) {
        this.setState({organiser: event.target.value})
    };

    onEventNameChange(event) {
        this.setState({eventName: event.target.value})
    };

    handleChange(event) {
        // console.log("HELLO", event)
        this.setState({type: event.target.value})
    };

    handleCheckChange() {
        this.setState(prevState => ({private: !prevState.private }));
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="input-components">
        <div>Welcome, John Doe</div>
        <div style={gradientDiv}></div>
        <Typography variant="h1" gutterBottom>Basic Information</Typography>
        <Typography variant="h4" 
                    classes={{
                        root: classes.typoRoot,
                    }}>
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
              onChange={this.handleChange}
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

          <FormControl classes={{root: classes.marginRoot}}>
            
            <TextField
              id="synopsis"
              label="Synopsis"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onFocus={this.shrinkLabel}
              onBlur={this.unShrinkLabel}
              InputProps={{
                classes: {
                  root: classes.inputPropsMulti,
                }, 
                disableUnderline: true,
                multiline: true,
                rows: 5,
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabelEmail,
                  focused: classes.inputLabelFocused,
                  shrink: classes.inputLabelShrink,
                },
                shrink: this.state.emailShrink,
              }}
              
            />
          </FormControl>

          <FormControl classes={{root: classes.marginRoot}}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search with venue address, venue name"
                classes={{
                  root: classes.textField,
                  input: classes.inputInput,
                }}
                
                inputProps={{ 
                  'aria-label': 'Search',
                  classes: {
                    root: classes.searchRoot
                  }
                 }}
              />
          </FormControl>
        </div>
      );
    }
}


export default withStyles(styles)(TicketInfo);