const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 

  
  },
  paper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    position: 'absolute',
    fontFamily:"Orbitron",

    height:"45vh",
    width: 'auto',
    margin:" 0px ",
    top: '30%',
    left: 'calc(40% + 150px - 175px)',
    color: 'green',
    backgroundColor:"none",
 
    [theme.breakpoints.down(600 + theme.spacing(1*1))]: {
      width: "auto",
    
      marginLeft: '0px',
      marginRight: '0px',
   
      top: '30%',
      left: 'calc(50% + 150px - 175px)',
      fontSize:"10px",
   
    },
    
  },
 
  form: {
    width: '100%',
    marginTop: theme.spacing(),
  },
  
  errorText: {
    color: 'red',
    margin: "-50px 0px 0px 0px",
    textAlign: 'center',
  },

 
});

export default styles;

