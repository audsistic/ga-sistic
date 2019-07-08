import React from 'react';

import TextField from '@material-ui/core/TextField';

function ComponentTest() {
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
      />
    </div>
  );
}

export default ComponentTest;