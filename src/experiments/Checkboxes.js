import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  
});

class Checkboxes extends React.Component {


  constructor(props) {
    super()
    this.state = {
        private: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
        this.setState({private: event.target.value });
    };

    render() {

      const { classes } = this.props;

      return (
        <div className="checkbox-components">

          <Typography variant="h4">
             Checkboxes
          </Typography>
          
          <FormGroup row>
            <FormControlLabel
                control={
                <Checkbox checked={this.state.private} onChange={this.handleChange} value="checkedA" />
                }
                label="Check if this is a private event"
            />
        </FormGroup>
        </div>
      );
    }
}


export default withStyles(styles)(Checkboxes);