import React from 'react';

import GoogleMap from './GoogleMaps';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    gridRow: {
        marginBottom: '45px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '24px',
        },
    },
});

const welcomeHeader = {
    fontSize: '17px',
    lineHeight: 1.3529,
    color: '#000000',
    textDecoration: 'none solid rgb(0, 0, 0)',
    marginBottom: '12px',
}

const contentStyle = {
    fontSize: '14px',
    color: '#000000',
    lineHeight: 1.357,
    textDecoration: 'none solid rgb(153, 153, 153)',
}

class ProgressSummary extends React.Component {


  constructor(props) {
    super()
    this.state = {
        //previous ticket info
        organiser: props.organiser ? props.organiser : "Not specified",
        eventName: props.eventName ? props.eventName: "Not specified",
        type: props.type ? props.type : "Not specified",
        private: props.private ? props.private : "Not specified",
        venueName: props.venueName ? props.venueName : "Not specified",
        venueAddress: props.venueAddress ? props.venueAddress : "Not specified",

        //from event schedule
        dates: props.dates ? props.dates : "Not specified",
        time: props.time ? props.time : "Not specified",
    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="top-summary">
            <div style={welcomeHeader}>Welcome, John Doe</div>
            <Typography variant="h1" gutterBottom> 
                { this.state.eventName }</Typography>
            
            <Grid
                container
                direction="row"
                spacing={1}
                justify="flex-start"
                alignItems="center"
                classes={{root: classes.gridRow}}
                >
                <Grid item xs={6} zeroMinWidth> 
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                        classes={{root: classes.gridRow}}
                        >
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Organised by</Typography>
                            <div style={contentStyle}>
                            { this.state.organiser }
                            </div>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Venue</Typography>
                            <div style={contentStyle}>{ this.state.venueName }
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Genre</Typography>
                            <div style={contentStyle}>{ this.state.type }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <div className="desktop d-none d-md-block">
                    <Grid item xs={6} zeroMinWidth> 
                        <div style={{
                            background: 'grey',
                            height: '149px',
                            width: '230px',
                        }}>
                            <GoogleMap venueName={ this.state.venueName } />
                        </div>
                    </Grid>
                </div>
                    
            </Grid>
            <div className="mobile d-md-none">
                <Grid
                    container
                    direction="row"
                    spacing={1}
                    justify="flex-start"
                    alignItems="center"
                    classes={{root: classes.gridRow}}
                    >
                        <div style={{
                            background: 'grey',
                            height: '149px',
                            width: '100%',
                        }}>
                            <GoogleMap venueName={ this.state.venueName } />
                        </div>
                </Grid>
            </div>
            
            {this.props.priceDetail && 
                <div>
                    <hr />
                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justify="flex-start"
                        alignItems="center"
                        classes={{root: classes.gridRow}}
                        >
                        <Grid item xs={6} zeroMinWidth> 
                                    <Typography variant="h5">Event Start Date</Typography>
                                    <div style={contentStyle}>
                                    { this.state.dates }
                                    </div>
                        </Grid>
                        <Grid item xs={6} zeroMinWidth> 
                            <Typography variant="h5">Time Slots</Typography>
                            <div style={contentStyle}>{ this.state.time }
                            </div>
                        </Grid>
                    </Grid>
                </div>
            }
            
        </div>
      );
    }
}


export default withStyles(styles)(ProgressSummary);