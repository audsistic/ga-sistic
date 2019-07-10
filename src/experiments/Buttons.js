import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  continueButton: {
    background: theme.palette.primary.main,
    padding: '20px 40px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      width: '222px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  discardButton: {
    background: theme.palette.primary.light,
    padding: '20px 40px',
    height: '56px',
    borderRadius: '0px',
    fontSize: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.up('md')]: {
      width: '222px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
          
          <Grid
            container
            direction="row"
            spacing={1}
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={6} sm={12} zeroMinWidth> 
              <Button
                classes={{
                  root: classes.continueButton
                }}
                color="secondary">
                    Continue
              </Button>
            </Grid>
            <Grid item xs={6} sm={12} zeroMinWidth>
              <Button
              classes={{
                root: classes.discardButton
              }}
              color="secondary">
                  Discard
              </Button>
            </Grid>
          </Grid>
        </div>
      );
    }
}


export default withStyles(styles)(Buttons);