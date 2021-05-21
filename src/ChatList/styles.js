const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  
    height: '70vh',
   
    position: 'relative',
    left: '0',

  },

  listItem: {
    cursor: 'pointer',
 
  },
 
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  },
 
});

export default styles;