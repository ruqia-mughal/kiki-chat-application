import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {  motion} from "framer-motion";
import firebase from 'firebase/app';
import "firebase/firestore";
import ParticlesBg from 'particles-bg'

const pageTransition={

  in:{
   
opacity:0.8,
y:0,
x:0,
  },
  out:{
      opacity:0,
      y:10,
      x:50,
      scale:1,
     
  }
}
class SignupComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      fullname:null,
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: ''
    };
  }
  render() {
    
    const { classes } = this.props;
  
    return (
      
      <motion.div
      whileHover={{  scale: 1,transition: { duration: 0.3 ,delay:0.4},  ease: [0.37, 0, 0.13, 1], }}
       whileTap={{ scale: 1}} 
      initial="out"
      animate="in" 
      variants={pageTransition}
      exit={{opacity:1}}>


   
       <ParticlesBg  num={100}   type="polygon" bg={true} />
     
     
 

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={1} lg={1} />
        <Grid item xs={false} sm={5} md={5} lg={5} className={classes.image} />
        <Grid item xs={12} sm={7} md={5} lg={5} component={Paper} elevation={6} square>
          <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
       
          </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up!
          </Typography>
        <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>

              <FormControl required fullWidth margin='normal'>
     
                  <InputLabel htmlFor='fullname'>Full Name</InputLabel>
                  <Input autoComplete='fullname'  autoFocus onChange={(e) => this.userTyping('fullname', e)} id='fullname'></Input>
                </FormControl>

                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='signup-email-input'>Enter Your Email</InputLabel>
                  <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='signup-email-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='signup-password-input'>Create A Password</InputLabel>
                  <Input type="password" placeholder="minimum six digits" onChange={(e) => this.userTyping('password', e)} 
                  id='signup-password-input'></Input>
                </FormControl>
                <FormControl required fullWidth margin='normal'>
                  <InputLabel htmlFor='signup-password-confirmation-input'>Confirm Your Password</InputLabel>
                  <Input type="password" placeholder="minimum six digits" onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                </FormControl>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
              </form>
              {
                this.state.signupError ?
                <Typography className={classes.errorText} component='h5' variant='h6'>
                    {this.state.signupError}
                  </Typography> :
                  null
                }
              <h5 className={classes.hasAccountHeader}>Already Have An Account?   <Link className={classes.logInLink} to='/login'>Log In!</Link></h5>
            
                <Typography variant="body2" color="textSecondary" align="center">
                  {'Copyright © '}
             
                    KiKi chat app  
  
                  {new Date().getFullYear()}
              
                </Typography>
            </Paper>
          </main>
        </Grid>
        
        <Grid item xs={false} sm={false} md={1} lg={1} />

      </Grid>

</motion.div>


    );
  }

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'fullname':
        this.setState({ fullname: event.target.value });
        break;
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      case 'passwordConfirmation':
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitSignup = (e) => {
    e.preventDefault(); 
    if (!this.formIsValid()) {
      this.setState({ signupError: 'Passwords do not match' });
      return;
    }
let fullname=document.getElementById("fullname").value;

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email,
          fullname : fullname,
          friends: [],
          messages: []
        };
        firebase
          .firestore()
          .collection('users')
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push('/dashboard');
          }, dbErr => {
            console.log('Failed to add user to the database: ', dbErr);
            this.setState({ signupError: 'Failed to add user' });
          });
      }, authErr => {
        console.log('Failed to create user: ', authErr);
        this.setState({ signupError: 'Failed to add user' });
      });
  };
}

export default withStyles(styles)(SignupComponent);