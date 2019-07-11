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

const pinStyle = {
    width: '15px',
    height: '25px',
}
class Cards extends React.Component {

  constructor(props) {
    super()
    this.state = {
        events: "",
    }
  }

    render() {

      const { classes } = this.props;

      return (
        <div className="button-components">
          <Card className={classes.card} elevation={0} square={true}>
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