import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"
import { motion} from "framer-motion";
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
      x:0,
      scale:1,
  }
}
class LoginComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      serverError: false
    };
  }

  render() {

    const { classes } = this.props;
    return (
      <motion.div
      whileHover={{  scale: 1,
        transition: { duration: 0.3 ,delay:0.4},  ease: [0.37, 0, 0.13, 1], }}
       whileTap={{ scale: 1 }} 
       
      initial="out"
      animate="in" 
      variants={pageTransition}
      exit={{opacity:1}}>
  <ParticlesBg  num={100}   type="tadpole" bg={true} />
     
      <Grid   container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={false} md={1} lg={1} />
        <Grid item xs={false} sm={5} md={5} lg={5} className={classes.image} />
        <Grid item xs={12} sm={7} md={5} lg={5} component={Paper} elevation={6} square>
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In!
          </Typography>
          <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
              <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} 
              id='login-email-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
              <Input autoComplete="current-password" placeholder="minimum six digits" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Log In</Button>
          </form>
          { this.state.serverError ? 
            <Typography className={classes.errorText} component='h5' variant='h6'>
              Incorrect Login Information
            </Typography> :
            null
          }
          <h5 className={classes.noAccountHeader}>Don't Have An Account?  <Link to='/signup' className={classes.signUpLink} >Sign Up!</Link></h5>
         
          <Link className={classes.forgotpassword} to='/signup'>Forgot password?</Link>
             
         
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
      case 'email':
        this.setState({ email: event.target.value });
        break;
        
        case 'password':
          this.setState({ password: event.target.value });
          break;
          
          default:
        break;
    }
  }

  submitLogin = async (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push('/dashboard');
      }, err => {
        this.setState({ serverError: true });
        console.log('Error logging in: ', err);
      });
  };

}

export default withStyles(styles)(LoginComponent);