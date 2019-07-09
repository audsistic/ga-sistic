import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  marginRoot: {
    margin: '0 24px',
  },
  textField: {
    border: '1px solid #E7E7E7',
    width: '487px',
    height: '100%',
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
  inputPropsDT: {
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
  inputLabelFocused: {
    color: '#D8D8D8',
    padding: '0px',
  },
  inputLabelShrink: {
    color: '#D8D8D8',
  },
  inputAdornment: {
    marginTop: '0px !important',
    marginLeft: '10px',
  }
});

class Inputs extends React.Component {


  constructor(props) {
    super()
    this.state = {
      username: "",
      shrink: false,
      activeIndex: 0,
    }
  }
  
    shrinkLabel = (event) => {
      const { onFocus } = this.props;
      this.setState({shrink: true});
      onFocus && onFocus(event); 
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        if(event.target.value.length === 0) {
            this.setState({shrink: false})
        }
        onBlur && onBlur(event); 
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="input-components">
          <Typography variant="h4">
             Input Fields
          </Typography>
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
                className={classes.textField}
                InputProps={{
                    classes: {
                        root: classes.inputPropsDT,
                    }, 
                    disableUnderline: true,
                    endAdornment: 
                    !this.state.shrink && 
                        <InputAdornment 
                            position="end"
                            classes={{positionEnd: classes.inputAdornment}}>
                            <img src={require("../../src/assets/images/icons/calendar.svg")} alt="" />
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

        </div>
      );
    }
}


export default withStyles(styles)(Inputs);