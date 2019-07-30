import React, { Component } from 'react';
import  '../App.css';

import { withStyles } from '@material-ui/core/styles';
import { FormGroup, Typography, RootRef } from "@material-ui/core"; 

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

import { ReactComponent as CalendarIcon } from '../../src/assets/images/icons/calendar.svg';
import { ReactComponent as DeleteIcon } from '../../src/assets/images/icons/dustbin.svg';
import { ReactComponent as EditIcon } from '../../src/assets/images/icons/pencil.svg';
import { ReactComponent as DiscountIcon } from '../../src/assets/images/icons/discount.svg';

var moment = require('moment');

const styles = theme => ({

    dialogContentRoot: {
        padding: '0px',
    },
    marginTicketType: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 14px 0px 0px',
            width: '24.3055556vw',
            maxWidth: '350px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginPrice: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 14px 0px 0px',
            width: '13.75vw',
            maxWidth: '198px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginDiscount: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 0px 0px 0px',
            width: '9.6527778vw',
            width: '139px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginStartDate: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 14px 0px 0px',
            width: '24.3055556vw',
            maxWidth: '351px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    marginStopDate: {
        [theme.breakpoints.up('md')]: {
            margin: '18px 0px 0px 0px',
            width: '24.3055556vw',
            maxWidth: '351px',
          },
          [theme.breakpoints.down('sm')]: {
              margin: '7.5px 0px',
              width: '90.09661vw',
              maxWidth: '373px',
          },
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
    inputPropsDate: {
        background: '#FFFFFF',
        height: '71px',
        transform: 'unset',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        boxShadow: '0px 2px 4px rgba(219,219,219,0.5)',
        border: '1px solid #e7e7e7',

        '&:hover': {
            background: '#FFFFFF',
            border: '1px solid #0080C9',
        },
    },
    inputLabelShrink: {
        color: '#0080C9 !important',
    },
    inputAdornment: {
        marginTop: '21px !important',
        marginRight: '7px',
        height: '20px',
        width: '20px',
    },
    formGroup: {
        width: '100%',
    },
    topGrid: {
    padding: '19px 23px 54px 31px',
    },
    divider: {
    height: '2px',
    background: 'linear-gradient(to right, #0080c9, #c86dd7)',
    },
    bottomGrid: {
        backgroundColor: '#f7f7f7',
        padding: '16px 28px 21px 40px',
    },
    buttonDelete: {
        borderRadius: '18px',
        width: '122px',
        height: '35px',
        color: '#4a4a4a',
        border: '1px solid #979797',
        margin: '0px 4px',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: '#ffffff',
        },
    },
    buttonEdit: {
        borderRadius: '18px',
        width: '100px',
        height: '35px',
        color: '#4a4a4a',
        border: '1px solid #979797',
        margin: '0px 4px',
        '&:hover': {
            background: theme.palette.primary.dark,
            color: '#ffffff',
        },
    },
    buttonLabel: {
        margin: 'auto',
        height: '100%',
    },
    typoSpecialDiscount: {
        fontSize: '23px',
        margin: '38px 0px 20px 0px',
    },
    buttonContainer: {
        marginTop: '17px',
    },
    discountButton: {
        color: 'white',
        backgroundColor: '#0080c9',
        width: '222px',
        height: '56px',
        fontSize: '16px',
        borderRadius: '0px',
        '&:hover': {
          background: theme.palette.primary.dark,
        },
        [theme.breakpoints.up('md')]: {
          width: '222px',
        },
        [theme.breakpoints.down('sm')]: {
          width: '134px',
        }
    },
})

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
}

const eventDatesHeader = {
    fontSize: '12px',
    fontFamily: 'Open Sans-Bold',
}

const eventDatesText = {
    fontSize: '19px',
}

const inputNativeBefore = {
    fontSize: '11px',
    textTransform: 'uppercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const inputNativeBeforeDuration = {
    fontSize: '11px',
    color: '#A1A1A1',
    paddingTop: '32px',
}

const inputNativeAfter = {
    fontSize: '16px',
    textTransform: 'lowercase',
    color: '#A1A1A1',
    paddingTop: '32px',
}


//Placeholer texts for inputs
const placeholderText = {
    ticketType: "eg. General Admission",
    price: "eg. 4.50",
    discount: "e.g. 50%",
}

class ModalDiscount extends Component {

    constructor(props) {
        super()
        this.state = {
            //adjusting elements
            ticketTypeShrink: false,
            priceShrink: false,
            discountShrink: false,
            startDateShrink: false,
            stopDateShrink: false,

            //Edit/Delete buttons
            deleteHover: false,
            editHover: false,

            //form data
            ticketType: placeholderText.ticketType,
            price: placeholderText.price,
            discount: placeholderText.discount,
            startDate: "",
            stopDate: "",

            discountGroup: [],
        }

        this.shrinkLabel = this.shrinkLabel.bind(this);
        this.unShrinkLabel = this.unShrinkLabel.bind(this);
        this.onTicketTypeChange = this.onTicketTypeChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onDiscountChange = this.onDiscountChange.bind(this);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onStopDateChange = this.onStopDateChange.bind(this);

        this.addDiscount = this.addDiscount.bind(this);
        this.deleteDiscount = this.deleteDiscount.bind(this);
    }

    shrinkLabel = (event) => {
        const { onFocus } = this.props;
        if (event.target.id === "ticketType") {
            this.setState({ticketTypeShrink: true});
            if(event.target.value === placeholderText.ticketType) {
                this.setState({ticketType: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "price") {
            this.setState({priceShrink: true});
            if(event.target.value === placeholderText.price) {
                this.setState({price: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "discount") {
            this.setState({discountShrink: true});
            if(event.target.value === placeholderText.discount) {
                this.setState({discount: ""})
            }
            onFocus && onFocus(event); 
        } else if (event.target.id === "startDate") {
            this.setState({startDateShrink: true});
            onFocus && onFocus(event); 
        } else if (event.target.id === "stopDate") {
            this.setState({stopDateShrink: true});
            onFocus && onFocus(event); 
        } 
    };

    unShrinkLabel = (event) => {
        const { onBlur } = this.props;
        
        if (event.target.id === "ticketType") {
            if(event.target.value.length === 0) {
                this.setState({ticketTypeShrink: false, ticketType: placeholderText.ticketType})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "price") {
            if(event.target.value.length === 0) {
                this.setState({priceShrink: false, price: placeholderText.price})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "discount") {
            if(event.target.value.length === 0) {
                this.setState({discountShrink: false, discount: placeholderText.discount})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "startDate") {
            if(event.target.value.length === 0) {
                this.setState({startDateShrink: false})
            }
            onBlur && onBlur(event); 
        } else if (event.target.id === "stopDate") {
            if(event.target.value.length === 0) {
                this.setState({stopDateShrink: false})
            }
            onBlur && onBlur(event); 
        } 
    };


    onTicketTypeChange(event) {
        this.setState({ticketType: event.target.value});
        // this.props.onTicketTypeChange(event);
    }

    onPriceChange(event) {
        this.setState({price: event.target.value});
    }

    onDiscountChange(event) {
        this.setState({discount: event.target.value});
    }

    onStartDateChange(event) {
        this.setState({startDate: event.target.value})
    }

    onStopDateChange(event) {
        this.setState({stopDate: event.target.value})
    }


    addDiscount() {
        let combined = {
            ticketType: this.state.ticketType,
            price: this.state.price,
            discount: this.state.discount,
            startDate: this.state.startDate,
            stopDate: this.state.stopDate,
        }
        this.setState(prevState => ({
            discountGroup: [...prevState.discountGroup, combined],
            ticketType: placeholderText.ticketType,
            price: placeholderText.price,
            discount: placeholderText.discount,
        }))
    }

    deleteDiscount(e) {
        let discounts = [...this.state.discountGroup];
        discounts.splice(e.target.id, 1);
        this.setState({discountGroup: discounts});
    }

    render() {

        const { classes } = this.props;

        return (
            <Dialog
                onClose={this.handleClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
                maxWidth={false}
                PaperProps={{
                    square: true,
                }}
                >
                <DialogContent classes={{
                    root: classes.dialogContentRoot,
                }}>
                <Grid
                        container
                        direction="column"
                        classes={{
                            root: classes.topGrid
                        }}
                        > 
                    <div style={
                        Object.assign({
                            margin: '35px 0px 24px',
                        }, gradientDiv)}>
                    </div>
                    <Typography variant="h1">Special Discounts</Typography>
                    <IconButton aria-label="Close" className={classes.closeButton} onClick={this.props.handleDiscountModalClose}>
                        <CloseIcon />
                    </IconButton>
                
                    <Typography
                        classes={{
                            root: classes.typoSpecialDiscount
                        }}
                    >
                        <DiscountIcon width="37px" height="37px" />Need to set up special ticket discount?
                    </Typography>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e);
                            this.addDiscount();
                        }  
                    }>
                        <FormGroup row classes={{root: classes.formGroup}}>
                            <FormControl classes={{root: classes.marginTicketType}}>
                                <TextField
                                    id="ticketType"
                                    label="Type of Ticket"
                                    type="text"
                                    variant="filled"
                                    value={this.state.ticketType}
                                    className={classes.textFieldDate}
                                    onChange={this.onTicketTypeChange}
                                    onFocus={this.shrinkLabel}
                                    onBlur={this.unShrinkLabel}
                                    InputProps={{
                                        classes: {
                                            root: classes.inputPropsDate,
                                        }, 
                                        disableUnderline: true,
                                        inputProps: {
                                            style: this.state.ticketTypeShrink ? inputNativeAfter : inputNativeBeforeDuration,
                                        }
                        
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabelDate,
                                            focused: classes.inputLabelFocused,
                                            shrink: classes.inputLabelShrink,
                                        },
                                        shrink: this.state.ticketTypeShrink,
                                    }}
                                />
                            </FormControl>

                            <FormControl classes={{root: classes.marginPrice}}>
                            <TextField
                                id="price"
                                label="Price (in SGD)"
                                type={this.state.price === placeholderText.price ? "text" : "number"}
                                variant="filled"
                                value={this.state.price}
                                className={classes.textFieldDate}
                                onChange={this.onPriceChange}
                                onFocus={this.shrinkLabel}
                                onBlur={this.unShrinkLabel}
                                InputProps={{
                                    classes: {
                                        root: classes.inputPropsDate,
                                    }, 
                                    disableUnderline: true,
                                    startAdornment: 
                                    this.state.priceShrink && 
                                        <InputAdornment 
                                            position="start"
                                            classes={{positionStart: classes.inputAdornment}}>
                                            $
                                        </InputAdornment>,
                                    inputProps: {
                                        style: this.state.priceShrink ? inputNativeAfter : inputNativeBeforeDuration,
                                        step: '0.01',
                                    }
                    
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.inputLabelDate,
                                        focused: classes.inputLabelFocused,
                                        shrink: classes.inputLabelShrink,
                                    },
                                    shrink: this.state.priceShrink,
                                }}
                                />
                            </FormControl>

                            <FormControl classes={{root: classes.marginDiscount}}>
                                <TextField
                                    id="discount"
                                    label="% of Discount"
                                    type={this.state.discount === placeholderText.discount ? "text" : "number"}
                                    variant="filled"
                                    value={this.state.discount}
                                    className={classes.textFieldDate}
                                    onChange={this.onDiscountChange}
                                    onFocus={this.shrinkLabel}
                                    onBlur={this.unShrinkLabel}
                                    InputProps={{
                                        classes: {
                                            root: classes.inputPropsDate,
                                        }, 
                                        disableUnderline: true,
                                        endAdornment: 
                                        this.state.discountShrink && 
                                            <InputAdornment 
                                                position="end"
                                                classes={{positionEnd: classes.inputAdornment}}>
                                                %
                                            </InputAdornment>,
                                            inputProps: {
                                            style: this.state.discountShrink ? inputNativeAfter : inputNativeBeforeDuration,
                                            step: '0.01',
                                            required: true,
                                        }
                        
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabelDate,
                                            focused: classes.inputLabelFocused,
                                            shrink: classes.inputLabelShrink,
                                        },
                                        shrink: this.state.discountShrink,
                                    }}
                                    />
                            </FormControl>
                        </FormGroup>
                        <FormGroup row classes={{root: classes.formGroup}}>
                            <FormControl classes={{root: classes.marginStartDate}}>
                                    <TextField
                                        id="startDate"
                                        label="Start Date"
                                        type="date"
                                        variant="filled"
                                        defaultValue="DD-MM-YYYY"
                                        // inputRef={el => this.date = el}
                                        className={classes.textFieldDate}
                                        onChange={this.onStartDateChange}
                                        onFocus={this.shrinkLabel}
                                        onBlur={this.unShrinkLabel}
                                        InputProps={{
                                            classes: {
                                                root: classes.inputPropsDate,
                                            }, 
                                            disableUnderline: true,
                                            endAdornment: 
                                                <InputAdornment 
                                                    position="end"
                                                    classes={{positionEnd: classes.inputAdornment}}>
                                                    <CalendarIcon fill={this.state.startDateShrink ? "transparent" : "#000000"} />
                                                </InputAdornment>,
                                            inputProps: {
                                                style: this.state.startDateShrink ? inputNativeAfter : inputNativeBefore,
                                            }
                            
                                        }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabelDate,
                                            focused: classes.inputLabelFocused,
                                            shrink: classes.inputLabelShrink,
                                        },
                                        shrink: this.state.startDateShrink,
                                    }}
                                />
                            </FormControl>
                            <FormControl classes={{root: classes.marginStopDate}}>
                                <TextField
                                    id="stopDate"
                                    label="Stop Date"
                                    type="date"
                                    variant="filled"
                                    defaultValue="DD-MM-YYYY"
                                    // inputRef={el => this.date = el}
                                    className={classes.textFieldDate}
                                    onChange={this.onStopDateChange}
                                    onFocus={this.shrinkLabel}
                                    onBlur={this.unShrinkLabel}
                                    InputProps={{
                                        classes: {
                                            root: classes.inputPropsDate,
                                        }, 
                                        disableUnderline: true,
                                        endAdornment: 
                                            <InputAdornment 
                                                position="end"
                                                classes={{positionEnd: classes.inputAdornment}}>
                                                <CalendarIcon fill={this.state.stopDateShrink ? "transparent" : "#000000"} />
                                            </InputAdornment>,
                                        inputProps: {
                                            style: this.state.stopDateShrink ? inputNativeAfter : inputNativeBefore,
                                        }
                        
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.inputLabelDate,
                                            focused: classes.inputLabelFocused,
                                            shrink: classes.inputLabelShrink,
                                        },
                                        shrink: this.state.stopDateShrink,
                                    }}
                                />
                            </FormControl>
                        </FormGroup>
                        <Grid container direction="row" justify="flex-end" classes={{root: classes.buttonContainer}}>
                            <Button 
                                type="submit"
                                classes={{
                                    root: classes.discountButton
                                }}>Add Discount</Button>
                        </Grid>
                        
                    </form>
                    
                    
                    </Grid>
                    
                    {this.state.discountGroup.length > 0 ?
                        (<Grid 
                            container 
                            direction="row" 
                            className={classes.divider}>
                        </Grid>) : ("")
                    }
                    
                    { this.state.discountGroup.map((discount, index) => {
    
                        return (
                            <Grid
                                key={index}
                                container
                                direction="row"
                                // justify="center"
                                alignItems="center"
                                classes={{
                                    root: classes.bottomGrid
                                }}
                                > 
                                <Grid item xs={6}>
                                    <div style={eventDatesHeader}>Discount {index+1}</div>
                                    <div style={eventDatesText}>{discount.ticketType}</div>
                                    <div style={eventDatesText}>{discount.startDate} ~ {discount.stopDate}</div>
                                </Grid>

                                <Grid item xs={6} 
                                    container 
                                    justify="flex-end"
                                    alignItems="flex-start">
                                    <Button 
                                        onClick={this.deleteDiscount}
                                        id={index}
                                        variant="outlined" 
                                        className="delete-button"
                                        id={index}
                                        classes={{
                                            root: classes.buttonDelete,
                                            label: classes.buttonLabel,
                                            }}>
                                        <DeleteIcon 
                                            className="delete-icon"
                                            style={{ marginRight: '5px',}} 
                                            fill="#4a4a4a"
                                            /> Delete
                                    </Button>
                                    <Button 
                                        variant="outlined" 
                                        className="edit-button"
                                        classes={{
                                            root: classes.buttonEdit,
                                            label: classes.buttonLabel,
                                            }}>
                                        <EditIcon
                                            className="edit-icon"
                                            style={{ marginRight: '5px', }} 
                                            stroke="#4a4a4a"
                                            /> Edit
                                    </Button>
                                </Grid>

                                </Grid>
                            
                            )
                        })
                    }
                            
                </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styles)(ModalDiscount);