import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class About extends Component {  

  handleContact(){
    ///------
  }

  render(){
    const { classes } = styles;
    return (
   <div>
        <main>
          <div className={styles.heroUnit}>
          <div className={styles.heroContent}>                  
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
           FamiList - Our Dream
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>            
            Amazing things happen when people work together. blablabla familist Rivka Efrat 
            Since 2001, agile has disrupted the way software companies create their products.
             Rally was one of those leaders, and even after our acquisition by CA in 2015,
              we continue to lead the way when it comes to business agility—expanding beyond
             software into other parts of an organization to truly create agile corporations. 
            </Typography>
            <div className={styles.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                   Start Group
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>       
      </main>    
      </div>
  );
}
}

export default withStyles(styles)(About);