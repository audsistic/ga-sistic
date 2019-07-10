import React from 'react';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

});

class Modal extends React.Component {


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
        <div className="modal-components">
          
        </div>
      );
    }
}


export default withStyles(styles)(Modal);