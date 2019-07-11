import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  
});

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
          <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Professor Edwin Thumboo
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
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