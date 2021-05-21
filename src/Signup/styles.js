const styles = theme => ({
  root: {
    height: '100vh',

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
    margin: theme.spacing(0, 2),
    display: 'flex',
    // backgroundColor:"pink",
    paddingBottom:5,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
 
    marginTop: theme.spacing(1),
    width: '100%',
  
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    marginTop: theme.spacing(1),
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
 
  hasAccountHeader: {
    width: '100%'
  },
  logInLink: {
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