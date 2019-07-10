import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// import { Typography } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  checkbox: {
      width: '17px',
      height: '17px',
      margin: '7px',
      color: '#666666',
      fill: '#9E9E9E',
  },
  checked: {
       color: '#0080C9 !important',
  }
});

class Checkboxes extends React.Component {


  constructor(props) {
    super()
    this.state = {
        private: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange() {
        this.setState(prevState => ({private: !prevState.private }));
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="checkbox-components">
          
          <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox 
                    classes={{
                        root: classes.checkbox,
                        checked: classes.checked,
                    }}
                    checked={this.state.private} 
                    onChange={this.handleChange} />
                }
                label="Check if this is a private event"
            />
        </FormGroup>
        </div>
      );
    }
}


export default withStyles(styles)(Checkboxes);