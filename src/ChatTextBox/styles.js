const styles = theme => ({

  sendBtn: {
    color: 'blue',
    cursor: 'pointer',

  margin:"20px  auto",
   
fontSize:"30px",
    '&:hover': {
      color: 'green'
    }
  },
  chatTextBoxContainer: {
    border:"3px solid white",
    // position: 'relative',
    // zIndex:9999,
    // bottom: '1%',
    // left: '25%',
  
    overflow: 'auto',

    display:"flex",
    flexDirection:"row",
    width: "100%"
  },

  chatTextBox: {
    width: 'calc(100% - 50px)'
  },
  border:{
    border:"3px solid red",


  },
 

});

export default styles;