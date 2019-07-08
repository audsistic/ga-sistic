import React from 'react';

import { makeStyles } from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  cssRoot: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
  },
});


function ComponentTest() {

    const classes = useStyles();

  return (
    <div className="components">
      <TextField
        id="filled-email-input"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
        classes={{root: classes.cssRoot}}
      />
    </div>
  );
}

export default ComponentTest;