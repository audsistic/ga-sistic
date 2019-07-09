import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';

const styles = theme => ({
  continueButton: {
    background: theme.palette.primary.main,
    padding: '20px 40px',
    width: '222px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    margin: '4px',
    '&:hover': {
      background: theme.palette.primary.dark,
    }
  },
  discardButton: {
    background: theme.palette.primary.light,
    padding: '20px 40px',
    width: '222px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    margin: '4px',
    '&:hover': {
      background: theme.palette.primary.dark,
    }
  }
});

class Buttons extends React.Component {


  constructor(props) {
    super()
    this.state = {
    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="button-components">

          <Typography variant="h4">
             Buttons
          </Typography>
          
          <Button
            classes={{
              root: classes.continueButton
            }}
            color="secondary">
                Continue
            </Button>

            <Button
            classes={{
              root: classes.discardButton
            }}
            color="secondary">
                Discard
            </Button>
        </div>
      );
    }
}


export default withStyles(styles)(Buttons);