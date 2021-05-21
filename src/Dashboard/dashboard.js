import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MicIcon from '@material-ui/icons/Mic';
import Grid from '@material-ui/core/Grid';
import NewChatComponent from '../NewChat/newChat';
import ChatListComponent from '../ChatList/chatList';
import ChatViewComponent from '../ChatView/chatView';
import ChatTextBoxComponent from '../ChatTextBox/chatTextBox';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import ReactLogo from '../Ball-1s-200px.svg';
import Typical from 'react-typical'

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      curTime: new Date().toLocaleTimeString('en-US', { hour12: true }),
      name: "hardcoded name",
      email: null,
      friends: [],
      chats: [],
      anchorEl: null,
      setreader: "",
      image: "hardcoded image",
      video:"hardcoded video",
      file:"file",
      
    };
   
   
    
  }
  // record=(control)=>{
  //   chunks=[];
  //   timeout = setInterval(() => {
      
  //     recorder.start();
      
  //   }, 100);
    
  // }
  
  
  // stop=(control)=> {
  //   recorder.stop();
  // clearInterval(timeout);
  // }

  
  render() {
    
    // let  device = navigator.mediaDevices.getUserMedia({audio:true});
    // let chunks=[];
    // let recorder;
    // device.then(stream=>{
    //   recorder= new MediaRecorder(stream);
    //   recorder.ondataavailable=e=>{
    //     chunks.push(e.data);
    //     if(recorder.state=="inactive"){
          
    //       let blob = new Blob(chunks,{type:"audio/webm"});
          
    //       // document.getElementById("audio").innerHTML ='<source src="'+URL.createObjectURL(blob)+'" type="video/webm"/> ';
          
    //       const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])
          
    //       firebase.firestore().collection('chats').doc(docKey).update({
            
    //         messages: firebase.firestore.FieldValue.arrayUnion({
    //           sender: this.state.email,
    //           message: URL.createObjectURL(blob),
              
    //         }),
            
    //       });
    //     }
    //   }
      
    // });
    // var  timeout;
    


   
    const { classes } = this.props;
    if (this.state.email) {
      var name = this.state.email.includes('@') && this.state.email.substr(0, this.state.email.indexOf('@')).split(' ')[0];
      return (


        <Fragment>
         

          <div className='dashboard-container' id='dashboard-container'>

            <div className={classes.root}>
              <Grid container >


                <Grid item xs={12} sm={7} md={5} lg={4} className={classes.flex} >

                  <Avatar className={classes.avatar}>{this.state.email.split('')[0]}</Avatar>

                  <p style={{color:"hotpink",fontFamily:"sans-serif",textTransform:"capitalize"}}> {name}</p>
                  <p style={{color:"orchid"}}>{this.state.email}</p>
                  <p className={classes.curtime}>{this.state.curTime}</p>

                </Grid>
                <Grid item xs={12} sm={5} md={7} lg={8} className={classes.flex2}>
                  <Typical steps={[" welcome  " + name + " ! 👑  ", 1500, 'Select  Friend  &  Enjoy    Chatting 👍', 1000,]} loop={Infinity} wrapper="span" className={classes.caca} />
                </Grid>
              </Grid>

              <Grid container>

                <Grid item xs={5} sm={4} md={3} lg={3}>


                  <ChatListComponent history={this.props.history}
                    userEmail={this.state.email}
                    selectChatFn={this.selectChat}
                    chats={this.state.chats}
                    selectedChatIndex={this.state.selectedChat}
                    newChatBtnFn={this.newChatBtnClicked}>
                  </ChatListComponent>

                </Grid>

                <Grid item xs={7} sm={8} md={9} lg={9}>
                  {this.state.newChatFormVisible ? null :
                    <ChatViewComponent user={this.state.email} chat={this.state.chats[this.state.selectedChat]}></ChatViewComponent>

                  }</Grid>


                <Grid className={classes.border} item xs={12} sm={12} md={12} lg={12}>

                  {
                    this.state.selectedChat !== null && !this.state.newChatFormVisible ?
                      <Grid className={classes.flex3} item xs={12} sm={12} md={12} lg={12} >
                        <Grid item xs={2} sm={3} md={3} lg={3} ></Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8}>
                          <ChatTextBoxComponent userClickedInputFn={this.messageRead} submitMessageFn={this.submitMessage}></ChatTextBoxComponent>

                        </Grid>
                        <Grid item xs={2} sm={1} md={1} lg={1} className={classes.flex3}>

                          <Button aria-controls="simple-menu" aria-haspopup="true" style={{padding:"0px",width:"100%",margin:"0px"}} onClick={this.handleClick}><AttachFileIcon /></Button>
                          <Menu id="simple-menu" anchorEl={this.state.anchorEl} keepMounted open={Boolean(this.state.anchorEl)} onClose={this.handleClose}>

                            <MenuItem onClick={this.chooseaudio} ><MicIcon /><input onChange={(e) => this.handleChangeaudio(e)} type="file" id="audioFile" encType="multipart/form-data" accept="audio/*" style={{ display: "none" }} /></MenuItem>
                            <MenuItem onClick={this.chooseimg}> <ImageIcon /><input onChange={(e) => this.handleChangeImage(e)} ref="file" type="file" name="file" id="file" encType="multipart/form-data" accept="image/*" style={{ display: "none" }} /></MenuItem>
                            <MenuItem onClick={this.choosevideo} ><VideoLibraryIcon /><input  onChange={(e) => this.handleChangeVideo(e) }  type="file"   id="videoFile"  encType="multipart/form-data" accept="video/*" style={{ display: "none" }} /></MenuItem>
                            <MenuItem onClick={this.choosefile} ><FileCopyIcon /><input onChange={(e) => this.handleChangefile(e)} type="file" id="allFile" encType="multipart/form-data" accept="file/*" style={{ display: "none" }} /></MenuItem>
                         
                            {/* onMouseDown={e => this.record(e)} onMouseUp={e => this.stop(e)} */}

                          </Menu>
                        </Grid>


                      </Grid>
                      : null
                  }

                </Grid>

                <Grid item xs={7} sm={8} md={9} lg={9}>
                  {
                    this.state.newChatFormVisible ?
                      <NewChatComponent goToChatFn={this.goToChat} newChatSubmitFn={this.newChatSubmit}></NewChatComponent>
                      : null
                  }
                </Grid>

              </Grid>
            </div>
          </div>
          {/* <audio id="audio" controls>
          

          </audio> */}
        </Fragment>

      );
    }
    else {
      return (

        <div className={classes.svg}><img src={ReactLogo} alt="React Logo" /></div>
      );
    }
  }

  handleChangefile = (evt) => {
    console.log("Uploading");
    var self = this;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        file: upload.target.result
      });

    };
    reader.readAsDataURL(file);
    setTimeout(function () {
      console.log("self.state.file ====>", self.state.file);
      allfile()

      console.log("Uploaded");
    }, 1000);



    const allfile = () => {

      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])

      firebase.firestore().collection('chats').doc(docKey).update({

        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: self.state.file,

        }),

      });
    }


  }

 
 









  handleChangeImage = (evt) => {
    console.log("Uploading");
    var self = this;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        image: upload.target.result
      });

    };
    reader.readAsDataURL(file);
    setTimeout(function () {
      console.log("self.state.image====>", self.state.image);
      img()

      console.log("Uploaded");
    }, 1000);



    const img = () => {

      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])

      firebase.firestore().collection('chats').doc(docKey).update({

        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: self.state.image,

        }),

      });
    }


  }


  handleChangeVideo = (evt) => {
    console.log("Uploading");
    var self = this;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        video: upload.target.result
      });
      console.log(self.state.video)

    };
    reader.readAsDataURL(file);
    setTimeout(function () {
      console.log("self.state.video====>", self.state.video);
      video()

      console.log("Uploaded");
    }, 1000);



    const video = () => {

      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])

      firebase.firestore().collection('chats').doc(docKey).update({

        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: self.state.video,

        }),

      });
    }


  }




  handleChangeaudio = (evt) => {
    console.log("Uploading file");
    var self = this;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function (upload) {
      self.setState({
        file: upload.target.result
      });

    };
    reader.readAsDataURL(file);
    setTimeout(function () {
      console.log("self.state.image====>", self.state.file);
      chooseFileselet()

      console.log("Uploaded file");
    }, 1000);



    const chooseFileselet = () => {

      const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])

      firebase.firestore().collection('chats').doc(docKey).update({

        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: self.state.file,

        }),

      });
    }


  }





 
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })

  };
  handleClose = () => {
    this.setState({ anchorEl: null })

  };
  choosefile = () => {
    document.getElementById("allFile").click();

  };

  chooseimg = () => {
    document.getElementById("file").click();

  };
  choosevideo = () => {
    document.getElementById("videoFile").click();

  };
  chooseaudio = () => {
    document.getElementById("audioFile").click();

  };
  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

  newChatSubmit = async (chatObj) => {
    const docKey = this.buildDocKey(chatObj.sendTo);
    await
      firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .set({
          messages: [{
            message: chatObj.message,
            sender: this.state.email,

          }],
          users: [this.state.email, chatObj.sendTo],
          receiverHasRead: false
        })
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  }

  selectChat = async (chatIndex) => {
    await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
    this.messageRead();
  }

  goToChat = async (docKey, msg) => {
    const usersInChat = docKey.split(':');
    const chat = this.state.chats.find(_chat => usersInChat.every(_user => _chat.users.includes(_user)));
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(msg);
  }

  messageRead = () => {
    const chatIndex = this.state.selectedChat;
    const docKey = this.buildDocKey(this.state.chats[chatIndex].users.filter(_usr => _usr !== this.state.email)[0]);
    if (this.clickedMessageWhereNotSender(chatIndex)) {
      firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .update({ receiverHasRead: true });
    } else {
      console.log('Clicked message where the user was the sender');
    }
  }

  clickedMessageWhereNotSender = (chatIndex) => this.state.chats[chatIndex].messages[this.state.chats[chatIndex].messages.length - 1].sender !== this.state.email;

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr)
        this.props.history.push('/login');
      else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
              friends: []
            });
          })
      }
    });
  }
  submitMessage = (msg) => {
    const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(_usr => _usr !== this.state.email)[0])
    firebase
      .firestore()
      .collection('chats')
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  }
  buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

}



export default withStyles(styles)(DashboardComponent);










