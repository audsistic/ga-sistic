import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import { Typography } from '@material-ui/core';

import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  marginRoot: {
    margin: '0 24px',
    [theme.breakpoints.down('sm')]: {
        margin: '0px',
    },
  },
  textField: {
    border: '1px solid #E7E7E7',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        width: '33.819444vw',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90.09661vw',
    },
  },
  textFieldDate: {
    border: '1px solid #E7E7E7',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        width: '24.3056666vw',
    },
    [theme.breakpoints.down('sm')]: {
        width: '90.09661vw',
    },
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
    paddingTop: '10px',
    paddingLeft: '88.17px',
  },
  inputLabelDate: {
    fontSize: '16px',
    color: '#777777',
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
});

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

const types = ["Comedy", "Concert", "Comedy", "Dance"];

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

class Inputs extends React.Component {


  constructor(props) {
    super()
    this.state = {
      username: "",
      shrink: false,
      dateShrink: false,
      type: "",
    }
  }
  
    shrinkLabel = (event) => {
      const { onFocus } = this.props;
      this.setState({shrink: true});
      onFocus && onFocus(event); 
    };

    shrinkLabelDate = (event) => {
        const { onFocus } = this.props;
        this.setState({dateShrink: true});
        onFocus && onFocus(event); 
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        if(event.target.value.length === 0) {
            this.setState({shrink: false})
        }
        onBlur && onBlur(event); 
    };

    unShrinkLabelDate = (event) => {
        const { onBlur } = this.props;
        if(event.target.value.length === 0) {
            this.setState({dateShrink: false})
        }
        onBlur && onBlur(event); 
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="input-components">
    
          <FormControl classes={{root: classes.marginRoot}}>
            
            <TextField
              id="username-field"
              label="Username"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onFocus={this.shrinkLabel}
              onBlur={this.unShrinkLabel}
              InputProps={{
                classes: {
                  root: classes.inputProps,
                }, 
                disableUnderline: true,
                startAdornment: 
                 !this.state.shrink && 
                    <InputAdornment 
                        position="start"
                        classes={{positionStart: classes.inputAdornment}}>
                        <img src={require("../../src/assets/images/icons/user_icon_blue.svg")} alt="" />
                    </InputAdornment>
              }}
              InputLabelProps={{
                classes: {
                  root: classes.inputLabel,
                  focused: classes.inputLabelFocused,
                },
                shrink: this.state.shrink,
              }}
              
            />
          </FormControl>

          <FormControl classes={{root: classes.marginRoot}}>
              <TextField
                id="date"
                label="Start Date"
                type="date"
                margin="normal"
                variant="filled"
                defaultValue="DD-MM-YYYY"
                className={classes.textFieldDate}
                onFocus={this.shrinkLabelDate}
                onBlur={this.unShrinkLabelDate}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDate,
                    }, 
                    disableUnderline: true,
                    endAdornment: 
                    !this.state.dateShrink && 
                        <InputAdornment 
                            position="end"
                            classes={{positionEnd: classes.inputAdornmentDate}}>
                            <img src={require("../../src/assets/images/icons/calendar.svg")} alt="" />
                        </InputAdornment>,
                    inputProps: {
                        style: this.state.dateShrink ? inputNativeAfter : inputNativeBefore,
                    }
    
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.inputLabelDate,
                        focused: classes.inputLabelFocused,
                    },
                    shrink: this.state.dateShrink,
                }}
                inputProps={{
                    classes: {
                        root: classes.inputNative
                    }
                }}
            />
          </FormControl>
          <FormControl className={classes.marginRoot}>
            <Select
              multiple
              displayEmpty
              value={types}
              onChange={this.handleChange}
              input={<Input id="select-multiple-placeholder" />}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <em>Placeholder</em>;
                }

                return selected.join(', ');
              }}
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <em>Type</em>
              </MenuItem>
              {types.map(type => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    }
}


export default withStyles(styles)(Inputs);