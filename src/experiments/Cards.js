import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

var moment = require('moment');

const styles = theme => ({
    card: {
        maxWidth: 315,
      },
      dateTime: {
          color: '#000000',
          textDecoration: 'none solid rgb(0, 0, 0)',
          fontSize: '14px',
          fontFamily: 'OpenSans-Light',
      },
      header: {
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)',
        fontSize: '23px',
        fontFamily: 'OpenSans-Light',
      },
      content: {
        padding: '15px 19px',
        maxWidth: '246px',
      },
      media: {
        '&:hover': {
            background: 'white',
        }
      },
      location: {
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)',
        fontSize: '14px',
        fontFamily: 'OpenSans-Light',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
    },
});

class Cards extends React.Component {

  constructor(props) {
    super()
    this.state = {
        events: "",
    }
  }

  componentDidMount() {
    let events = [
      {
        "image": "../../src/assets/images/photographs/nation-gallery.png",
        "date": "13 Mar 2019 9PM",
        "speaker": "Professor Edwin Thumboo"
      },
      {
        "image": "../../src/assets/images/photographs/nation-gallery.png",
        "date": "14 Mar 2019 12PM",
        "speaker": "Mr Orange Pineapple"
      },
      {
        "image": "../../src/assets/images/photographs/nation-gallery.png",
        "date": "15 Mar 2019 8PM",
        "speaker": "Mdm Rosa Penaltra"
      }
    ];
    
    let eventArray = [];
    
    for(var i=0; i<events.length; i++) {
      eventArray.push(events[i])
    }
    
    this.setState({events: eventArray})
  }
  
    render() {
      console.log(this.state.events);
      const { classes } = this.props;

      return (
        <div className="button-components">
          <Card className={classes.card} elevation={3} square={true}>
                <CardActionArea disableRipple>
                    <CardMedia
                    className={classes.media}
                    height="168px"
                    component="img"
                    image={require('../../src/assets/images/photographs/nation-gallery.png')}
                    title=""
                    />
                    <CardContent classes={{root: classes.content}}>
                        <Typography gutterBottom component="div" classes={{
                            root: classes.dateTime
                        }}>
                            {moment().format('llll')}
                        </Typography>
                        <Typography gutterBottom classes={{
                            root: classes.header
                        }}>
                            Professor Edwin Thumboo
                        </Typography>
                        <Typography component="p" classes={{root: classes.location}}>
                            <img style={{ marginRight: '7px',}} src={require('../../src/assets/images/icons/pin.svg')} width="15px" height="25px" />
                            National Gallery
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
      );
    }
}


export default withStyles(styles)(Cards);