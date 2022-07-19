import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { Header } from '../components/Header';
import netflixAvatar from '../images/netflix-avatar.jpg';
import { Plans } from '../components/Plans';
import { NetflixButton } from '../styled/styledComponents';

export const Profile = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      
      <Typography variant="h3">Edit profile</Typography>
      <div className={classes.info}>
        <img src={netflixAvatar} alt="Avatar"/>
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">User email</Typography>
            <Typography className={classes.plansText} variant="h5" gutterBottom>Plans</Typography>
            <Plans cost={7.99}>Nexflix Standard</Plans>
            <Plans cost={11.99}>Nexflix Basic</Plans>
            <Plans wide="medium" color="gray" cost={15.99}>Nexflix Premium</Plans>
            <NetflixButton wide="fullWidth">Sign out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff", 
    minHeight: "100vh", 
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    maxWidth: "800px",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      }
    }
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",    
  },
  plansText: {
    borderBottom: "1px solid lightgray"
  }
}));