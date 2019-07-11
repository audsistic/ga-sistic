import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    dialogBox: {
        padding: '48px 57px',
    },
    marginRoot: {
        [theme.breakpoints.up('md')]: {
          width: '33.819444vw',
          maxWidth: '487px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '90.09661vw',
            maxWidth: '373px',
        },
      },
    textField: {
        border: '1px solid #E7E7E7',
        boxShadow: '0px 2px 4px rgba(219, 219, 219, 0.5)',
    },
    inputProps: {
        background: '#FFFFFF',
        height: '71px',
        transform: 'unset',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        '&:hover': {
          background: '#FFFFFF',
          border: '1px solid #0080C9',
        },
      },
      inputLabel: {
        fontSize: '16px',
        color: '#777777',
        textDecoration: 'none solid rgb(119, 119, 119)',
      },
      inputLabelFocused: {
        color: '#0080C9 !important',
        padding: '0px',
      },
      typo: {
          marginBottom: '30px',
      }
});

const inputNativeBefore = {
    fontSize: '11px',
    // textTransform: 'uppercase',
    color: '#A1A1A1',
    paddingTop: '5px',
}

const inputNativeAfter = {
    fontSize: '16px',
    textTransform: 'lowercase',
    color: '#A1A1A1',
    paddingTop: '5px',
}

const horizontal = {
    width: '100px',
    height: '5px',
    backgroundImage: 'linear-gradient(90deg, #0080C9, #C86DD7)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
}

class Modal extends React.Component {


  constructor(props) {
    super()
    this.state = {
        shrink: false,
        open: true,
        email: "Please provide your email address",
    }
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

    handleClickOpen() {
        console.log("open", this.state.open);
        this.setState( prevState => ({open: !prevState.open}) )
    }

    handleClose() {
        this.setState( prevState => ({open: !prevState.open}) )
    }

    shrinkLabel = (event) => {
        const { onFocus } = this.props;
        this.setState({shrink: true});
        onFocus && onFocus(event); 
        if(event.target.value === "Please provide your email address"){
            this.setState({email: ""})
        }
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        if(event.target.value.length === 0) {
            this.setState({shrink: false})
        }
        onBlur && onBlur(event); 
        if(event.target.value === ""){
            this.setState({email: "Please provide your email address"})
        }
    };

    handleTextChange(event) {
        this.setState({email: event.target.value})
    }

    render() {

      const { classes } = this.props;

      return (
        <div className="modal-components">
           
            <Button color="primary" onClick={this.handleClickOpen}>
               Forgot Password
            </Button>
            <Dialog 
                classes={{root: classes.dialogBox}}
                PaperProps={{
                    classes: {
                        root: classes.dialogBox,
                    }
                }}
                open={this.state.open} 
                onClose={this.handleClose} 
                aria-labelledby="forgot-password"
            >   
                <hr style={horizontal}></hr>
                    <Typography variant="h1" className={classes.typo}>Password Reset</Typography>
                    <Typography variant="h2">Forgotten your password? Enter your email address below.</Typography>
                        <FormControl classes={{root: classes.marginRoot}}>
                            <TextField
                                    autoFocus
                                    margin="normal"
                                    variant="filled"
                                    id="name"
                                    label="Email Address"
                                    type="email"
                                    multiline
                                    className={classes.textField}
                                    value={this.state.email}
                                    onChange={this.handleTextChange}
                                    onFocus={this.shrinkLabel}
                                    onBlur={this.unShrinkLabel}
                                    InputProps={{
                                        classes: {
                                            root: classes.inputProps,
                                        }, 
                                        disableUnderline: true,
                                        inputProps: {
                                            style: this.state.shrink ? inputNativeAfter : inputNativeBefore,
                                        }
                        
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabel,
                                            focused: classes.inputLabelFocused,
                                        },
                                        shrink: this.state.shrink,
                                    }}
                            />
                        </FormControl>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Password Reset
                </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
    }
}


export default withStyles(styles)(Modal);