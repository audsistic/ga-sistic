import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  },
  inputLabelFocused: {
    color: '#D8D8D8',
    padding: '0px',
  },
  inputLabelShrink: {
    color: '#D8D8D8',
  },
});


function ComponentTest(props) {

  const { classes } = props;

  const [values, setValues] = React.useState({
    username: "",
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="components">
      <FormControl classes={{root: classes.marginRoot}}>
        
        <TextField
          id="username-field"
          label={<img src="../assets/images/icons/user_icon_blue.svg" />+"Username"}
          className={classes.textField}
          margin="normal"
          variant="filled"
          InputProps={{
            classes: {
              root: classes.inputProps,
            }, 
            disableUnderline: true,
            // startAdornment: 
            //   <InputAdornment>
            //     <img src="../assets/images/icons/user_icon_blue.svg" />
            //   </InputAdornment>
          }}
          InputLabelProps={{
            classes: {
              root: classes.inputLabel,
              focused: classes.inputLabelFocused,
            }
          }}
          
        />
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(ComponentTest);