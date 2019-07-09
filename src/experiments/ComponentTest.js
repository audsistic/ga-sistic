import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  marginRoot: {
    margin: '0 24px',
  },
  textField: {
    border: '1px solid #E7E7E7',
    width: '487px',
    height: '81px',
    background: '#FFFFFF',
  },
  inputLabelFocused: {
    color: '#D8D8D8',
  },
  inputLabelShrink: {
    color: '#D8D8D8',
  },
});


function ComponentTest(props) {

  const { classes } = props;

  return (
    <div className="components">
      <FormControl classes={{root: classes.marginRoot}}>
        
        <TextField
          id="username-field"
          label="Username"
          placeholder="Username"
          className={classes.textField}
          margin="normal"
          variant="filled"
        />
      </FormControl>
    </div>
  );
}

export default withStyles(styles)(ComponentTest);