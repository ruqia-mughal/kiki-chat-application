const styles = theme => ({

  content: {
    height: '62vh' ,
    width: "auto",
    overflow: 'auto',
    backgroundColor: "rgb(247, 227, 224)",
    padding: '2px',
    overflowY: 'scroll',
   
  },
  content12: {
    padding:'10px',
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    height: '68vh',

    backgroundColor: "palevioletred",
   
   
  },
 

  strtchat:{
    color:"white",
    fontFamily:"Cormorant Garamond",
    textAlign:"center",
    margin:"0px",
    padding:"5px",
    fontSize:"2rem"
  },
banner: {

  display:"flex",
  justifyContent:"center",
    height: "90%",
    width: "100%" ,
    // margin:"100px"
  },
  userSent: {
   
    
    alignItems: "stretch",
    justifyContent:"space-between",
    alignContent: "space-between",
    
    flexWrap: "wrap",
    float: 'left',
    display:"flex",
    flexDirection:"row",
    clear: 'both',
    padding: "10px",
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: 'palevioletred',
    color: 'white',
    width: 'auto',
    borderRadius: '10px'
  },
  curtime:{
    padding:"0px",
    margin:"0px",
    color:"rgb(99, 94, 90)",
    fontSize:"medium",
    alignItems: "flex-end",
    textAlign:"center",
    display:"flex",
    


  },

  friendSent: {
    alignItems: "stretch",
    justifyContent:"space-between",
    alignContent: "space-between",
     
    display:"flex",

    flexDirection:"row",
 
    float: 'right',
    clear: 'both',
    padding: '10px 5px',
    marginTop:'7px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    backgroundColor: 'white',
    color: 'black',
    fontSize:"19px",
    width: 'auto',
    borderRadius: '10px'
  },

  chatHeader: {
    width: "100%" ,
    height: 'auto',
    backgroundColor: 'hotpink',
    borderRadius:"18px",
    display:"flex",
    justifyContent:"space-between",
    fontSize: '18px',
    textAlign: 'center',
    color: 'white',
    margin: '0px 0px 3px 0px ',

  },
  flex:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingLeft:"15px"
  }

});

export default styles;