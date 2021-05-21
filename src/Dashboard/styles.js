
const styles = theme => ({

  root: {
 
   height:"auto",
    boxShadow: '0px 0px 2px whitesmoke'
  },
  curtime:{
    color:"grey",
    fontSize:"small",
  
  },

  avatar:{
    color:"white",
    fontSize:"large",
    backgroundColor:"rgb(108, 211, 15)",
    margin:"10px 0px 0px 10px",

    boxShadow:"1PX 1PX 7PX green"
    
  },
  
  
  caca:{
    color:"midnightblue",
    fontFamily: 'Sansita Swashed',
    fontSize:"20px",
    padding:"0px",
    textAlign:"center",
    alignItem:"center",
    margin:"0px"
    
  },
  flex:{
    display:"flex",
    flexDirection:"row",
    fontSize:"medium",

 textAlign:"center",

 padding:"1px 3px",
justifyContent:"space-evenly",

flexWrap: "nowrap",
alignContent: "flex-end",
alignItems: "baseline",
  
  },
  flex3:{
    display:"flex",
    flexDirection:"row",

  alignItem:"center",
 textAlign:"center",
 margin:"0px ",
 padding:"0px",

  
  },
  flex2:{
    display:"flex",
    flexDirection:"row",
    textAlign:"center",
    alignItem:"center",
    alignContent:"center",
    justifyContent:"center",
    width:"100%",
    padding:"0px",
    margin:"10 auto",

  },
  

 
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
  svg:{
    margin: "auto",
    display:"flex",
    justifyContent:"center",
    alignItem:"center",
    width:"100vw",
    height:"100vh",
 
    
  },
  dashboardcontainer:{
    width:"100vw",
    backgroundColor:"red",
    height:"auto"
   
  },
  border:{

 
  padding:"0px",
  outline:"none",
  lineHeight:"none",
  margin:"0px",



  },
});

export default styles;