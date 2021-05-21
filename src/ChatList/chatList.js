import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import firebase from 'firebase/app';
import ChatIcon from '@material-ui/icons/Chat';
import pdf from "../assests/pdf.jpg"
import text from "../assests/text.png"
import word from "../assests/word.png"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import "firebase/auth"
import "firebase/firestore"
import "./style.css"

import  signout from "../assests/clarity-shutdown-icon.png";
class ChatListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleTimeString('en-US', { hour12: true }),
    };
  }
  render() {
    
    const { classes } = this.props;
    
    if(this.props.chats.length > 0) {
      return(
        <div className={classes.root} style={{overflowY:"scroll"}}>
  
            <List>
              <Button variant="outlined" className="btn  btn-block"  style={{fontSize:"30px",color:"white"}} onClick={this.newChat}><ChatBubbleOutlineIcon  style={{fontSize:"30px",color:"white"}}/>new  chat </Button>
              <Button variant="outlined"  className="signOutBtn" onClick={this.signOut} >Sign Out <img src={signout} width="30px" height="30px" alt="image" /></Button>
                <h4 className="friendhedding"> Your Friends</h4>
              { this.props.chats.map((_chat, _index) => {
                  return (
                 
                    <div key={_index} >
                      <ListItem onClick={() => this.selectChat(_index)} 
                        className={classes.listItem} 
                        selected={this.props.selectedChatIndex === _index} 
                        alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar style={{color:"white",backgroundColor:"cornflowerblue",padding:"0px",margin:"0px"}}>
                         

                            {_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]}
                         
                            
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                          primary= { <p className="email margin0">{_chat.users.filter(_user => _user !== this.props.userEmail)[0]}   </p>}
                          secondary={<React.Fragment>
                              <Typography component='span'color='textPrimary'>

                              {_chat.messages[_chat.messages.length - 1].message.indexOf("data:image/")!==-1 ?

                              <img width='50' height='50' alt="image" src={_chat.messages[_chat.messages.length - 1].message}/>
                              :
                            
                              _chat.messages[_chat.messages.length - 1].message.indexOf("data:audio/") != -1 ?
                              
                              <audio ref="audio_tag"  style={{width:"50px",height:"50px"}} src={_chat.messages[_chat.messages.length - 1].message} controls />
                              :
                              _chat.messages[_chat.messages.length - 1].message.indexOf("data:application/pdf") != -1 ?
                              
                              <img src={pdf} alt="image" style={{width:"50px",height:"50px",borderRadius:"50%"}} /> 
                              :

                              _chat.messages[_chat.messages.length - 1].message.indexOf("data:application/vnd") != -1 ?
                              
                              <img src={word} alt="image" style={{width:"50px",height:"50px",borderRadius:"50%"}} />  
                              :

                              _chat.messages[_chat.messages.length - 1].message.indexOf("data:text/") != -1 ?
                              
                              <img src={text} alt="image" style={{width:"50px",height:"50px",borderRadius:"50%"}} /> 
                              :
                              <p className="sidemsg margin0">

                               {
                                 _chat.messages[_chat.messages.length - 1].message.substring(0, 25) + ' ...'

                               }
                              </p>

                             }
                             
                             <p className="curtime margin0">{this.state.curTime}</p>
                         
                              
                              </Typography>
                            </React.Fragment>
                          }/>
                          {
                            _chat.receiverHasRead === false && !this.userIsSender(_chat) ? 
                            <ListItemIcon><NotificationImportant className={classes.unreadMessage}></NotificationImportant></ListItemIcon> :
                            null
                          }
                      </ListItem>
                      <Divider/>
                    </div>
               
                  )
                })
              }
            </List>
          
        </div>
      );
    } else {
      return(
        <div className={classes.root}>

    <div onClick={this.newChat}   className="btn">
   select friend to start chatting <ChatIcon style={{fontSize:"23px"}}/>
  </div>  
    
          <div className = "geeks"> 
            <div className = "gfg">About And use</div> 
            <div className = "g4g"> The users will be able to chat with each other, most likely only from user to user just
             like normal online chat app.you just have to signup to start chat and find friend who is already using kiki chat app to communicate.
            
            
             </div> 
         <div className="box1">
              <div className="square1"></div>
              <div className="square1"></div> 
              <div className="square1"></div> 

         </div>
        </div>
       
        </div>
      );
    }
  }


  signOut = () => firebase.auth().signOut();

  userIsSender = (chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;
  newChat = () => this.props.newChatBtnFn();
  selectChat = (index) => this.props.selectChatFn(index);
}

export default withStyles(styles)(ChatListComponent);



