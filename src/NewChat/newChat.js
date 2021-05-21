import React from 'react';
import SendIcon from '@material-ui/icons/Send';

import { FormControl, InputLabel, Input, Button, Paper, withStyles, CssBaseline, Typography } from '@material-ui/core';
import styles from './styles';
import "./style.css"
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"


class NewChatComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      username: null,
      message: null
    };
  }

  render() {

    const { classes } = this.props;

    return(
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5" className="typo" style={{fontFamily:"Orbitron"}}>Send A Message!</Typography>
          <form className={classes.form} onSubmit={(e) => this.submitNewChat(e)}>
            <FormControl fullWidth>
              <InputLabel htmlFor='new-chat-username'>
                  Enter Your Friend's Email
              </InputLabel>
              <Input required 
                className={classes.input}
                autoFocus 
                onChange={(e) => this.userTyping('username', e)} 
                id='new-chat-username'>
              </Input>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor='new-chat-message'>
                  Enter Your Message
              </InputLabel>
              <Input required 
                className={classes.input}
                onChange={(e) => this.userTyping('message', e)} 
                id='new-chat-message'>
              </Input>
              <div className="wrapper" >
        <div className="link_wrapper">
        
            <p className="unique"> <Button  className="button"  type='submit' >Send <SendIcon className="sndicon"/></Button></p>
    
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
            </svg>
          </div>
        </div>
      </div>
            </FormControl>
            
          
         
  

          </form>
       
          {
            this.state.serverError ? 
            <Typography component='h5' variant='h6' className={classes.errorText}>
              Unable to locate the user
            </Typography> :
            null
          }
        </Paper>
      </main>
    );
  }

  componentWillMount() {
    if(!firebase.auth().currentUser)
      this.props.history.push('/login');
  }

  userTyping = (inputType, e) => {
    switch (inputType) {
      case 'username':
        this.setState({ username: e.target.value });
        break;
      
      case 'message':
        this.setState({ message: e.target.value });
        break;

      default:
        break;
    }
  }

  submitNewChat = async (e) => {
    e.preventDefault();
    const userExists = await this.userExists();
    if(userExists) {
      const chatExists = await this.chatExists();
      chatExists ? this.goToChat() : this.createChat();
    }
  }

  buildDocKey = () => [firebase.auth().currentUser.email, this.state.username].sort().join(':');

  createChat = () => {
    this.props.newChatSubmitFn({
      sendTo: this.state.username,
      message: this.state.message
    });
  }

  goToChat = () => this.props.goToChatFn(this.buildDocKey(), this.state.message);

  chatExists = async () => {
    const docKey = this.buildDocKey();
    const chat = await 
      firebase
      .firestore()
      .collection('chats')
      .doc(docKey)
      .get();
    console.log(chat.exists);
    return chat.exists;
  }
  userExists = async () => {
    const usersSnapshot = await 
    firebase
      .firestore()
      .collection('users')
      .get();
    const exists = usersSnapshot
      .docs
        .map(_doc => _doc.data().email)
        .includes(this.state.username);
    this.setState({ serverError: !exists });
    return exists;
  }
}

export default withStyles(styles)(NewChatComponent);