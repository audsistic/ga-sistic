import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    typoRoot: {
        marginBottom: '20.5px',
    },
});

const gradientDiv = {
    background: 'linear-gradient(to right, #0080C9, #C86DD7)',
    height: '5px',
    width: '100px',
}

const welcomeHeader = {
    fontSize: '17px',
    lineHeight: 1.3529,
    color: '#000000',
    textDecoration: 'none solid rgb(0, 0, 0)',
}

const contentStyle = {
    fontSize: '14px',
    color: '#000000',
    lineHeight: 1.357,
    textDecoration: 'none solid rgb(153, 153, 153)',
}

class EventSchedule extends React.Component {


  constructor(props) {
    super()
    this.state = {
    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="event-schedule">
            <div style={welcomeHeader}>Welcome, John Doe</div>
            <Typography variant="h1" gutterBottom> 
                {
                    this.props.eventName ? this.props.eventName : "Not specified"
                }</Typography>

            <Grid
                container
                direction="row"
                spacing={1}
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={6} zeroMinWidth> 
                    <Typography variant="h5">Organised by</Typography>
                    <div style={contentStyle}>
                    {
                        this.props.organiser ? this.props.organiser : "Not specified"
                    }
                    </div>
                </Grid>
                <Grid item xs={6} zeroMinWidth> 
                    <Typography variant="h5">Venue</Typography>
                    <div style={contentStyle}>{
                        this.props.venueName ? this.props.venueName : "Not specified"
                    }
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
                    <div style={contentStyle}>{
                        this.props.type ? this.props.type : "Not specified"
                    }
                    </div>
                </Grid>
            </Grid>

            <div style={
                Object.assign({
                    margin: '48px 0px 18px',
                }, gradientDiv)}>
            </div>
            <Typography variant="h1" gutterBottom> 
                Help your patron plan their experience
            </Typography>
            <Typography variant="h4" classes={{ root: classes.typoRoot, }}>
                Tell your patron when will your event start and end so they can plan ahead
            </Typography>
            
        </div>
      );
    }
}


export default withStyles(styles)(EventSchedule);