const styles = theme => ({
  root: {
    height: '100vh ' ,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2, 2),
    marginTop: theme.spacing(2),
    display: 'flex',
    height:"90vh",
    flexDirection: 'column',
    alignItems: 'center',
 
    padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
  

    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginTop: theme.spacing(3),
  },
  main: {
    width: 'auto',
    display: 'block',
  
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing( 3 * 2))]: {
      width: "auto",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  noAccountHeader: {
    width: '100%'
  },
  forgotpassword: {
    width: '100%',
    textDecoration: 'none',
    color:"green",
    paddingTop:1,
    fontWeight: 'lighter',
 
  },
  signUpLink: {
    width: '100%',
    textDecoration: 'none',
    color: '#303f9f',
    fontWeight: 'bolder'
  },
  errorText: {
    color: 'red',
    textAlign: 'center'
  }
});

export default styles;