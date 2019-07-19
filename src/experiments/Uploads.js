import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/AddCircleOutline';
import { ReactComponent as ImageUploadIcon } from '../../src/assets/images/icons/image_icon.svg';


const styles = theme => ({
    button: {
        borderRadius: '18px',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    }
});

const uploadSpace = {
    width: '33.3333vw',
    maxWidth: '480px',
    height: '337.5px',
    background: '#D8D8D8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const resDiv = {
    marginBottom: '12px',
    fontSize: '15px',
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
}

class Uploads extends React.Component {


  constructor(props) {
    super()
    this.state = {
    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="upload-components">
          <div style={uploadSpace}>
            <ImageUploadIcon style={{
                marginBottom: '10px',
                height: '53px',
                width: '53px',
            }} />
                <div style={resDiv}>450 x 337px</div>
                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="outlined" component="div" className={classes.button}>
                        <AddIcon className={classes.extendedIcon} /> Upload Image
                        </Button>
                    </label> 
                </div>
                
          </div>
          
        </div>
      );
    }
}


export default withStyles(styles)(Uploads);