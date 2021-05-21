import React from 'react';
import styles from './styles';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import banner from "../assests/banner.png";
import Grid from '@material-ui/core/Grid';
import Loading from '../35d68be1a596880a5b298bf299bb179a.gif';
import pdf from "../assests/pdf.jpg"
import text from "../assests/text.png"
import word from "../assests/word.png"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
class ChatViewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      curTime: new Date().toLocaleTimeString('en-US', { hour12: true }),
    };
  }
  componentDidMount = () => {
    const container = document.getElementById('chatview-container');
    if (container)
      container.scrollTo(0, container.scrollHeight);
  }
  componentDidUpdate = () => {
    const container = document.getElementById('chatview-container');
    if (container)
      container.scrollTo(0, container.scrollHeight);
  }
  render() {
    const { classes } = this.props;

    if (this.props.chat === undefined) {
      return (<main className={classes.content12}>
        <img className={classes.banner} src={banner} alt="banner" />
        <p className={classes.strtchat}>Select friend and start chatting</p>
      </main>);
    } else if (this.props.chat !== undefined) {
      return (
        <div>
         
          <Grid container className={classes.chatHeader}>
    
               <div style={{display:"flex"}}>
                <Avatar style={{ color: "white", backgroundColor: "rgb(108, 211, 15)"}} >
                  {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0].split('')[0]}
                  </Avatar>

                {this.props.chat.users.filter(_usr => _usr !== this.props.user)[0]}

               </div>
                <ChatBubbleOutlineIcon  style={{fontSize:"44px", margin:"0px 10px"}}/>
              </Grid>
    

       
          <main id='chatview-container' className={classes.content}>
            {
              this.props.chat.messages.map((_msg, _index) => {
                return (
               

                  <div key={_index} className={_msg.sender === this.props.user ? classes.userSent : classes.friendSent}>


                    {_msg.sender === this.props.user ? <Avatar style={{ color: "black", backgroundColor: "white" }}>

                      {this.props.user[0].split('')[0]}</Avatar>

                      : <Avatar style={{ color: "white", backgroundColor: "black", margin: "10px" }}>{_msg.sender[0].split('')[0]}  </Avatar>}
                 
                   
                    <div className={classes.flex}>
                
                      {_msg.message.indexOf("data:video/") != -1 ?
                       <video controls autoPlay width="150px" height="150px" ><source src={_msg.message}  /></video> 
                       :
                       _msg.message.indexOf("data:image/") != -1 ?  <img alt="image" width="150px" height="150px" style={{ margin: "14px 2px" }} src={_msg.message} />
                       :
                       _msg.message.indexOf("data:audio/") != -1 ?<audio ref="audio_tag" src={_msg.message} controls autoPlay/>
                       :
                      _msg.message.indexOf("data:application/pdf") != -1   ?<a href={_msg.message} download="download.pdf"> 
                       <img src={pdf} alt="image" style={{width:"100px",height:"100px",borderRadius:"50%"}} />  </a>
                      :
                      _msg.message.indexOf("data:application/vnd") != -1   ?<a href={_msg.message} download="download.docx">
                          <img alt="image" src={word}  style={{width:"100px",height:"100px",borderRadius:"20%"}}/> </a>
                      :
                      
                      _msg.message.indexOf("data:text/") != -1   ?<a  href={_msg.message} download="download.txt" > 
                      <img alt="image" src={text} style={{width:"100px",height:"100px",borderRadius:"50%"}} /> </a>
                      :
                       <p style={{fontFamily:"monospace",fontStyle:"revert",fontSize:"large"}}>{_msg.message} </p>
                       
                       }

                    </div>

                  
               
                    <p className={classes.curtime}> {this.state.curTime}</p>

                  </div>
                )
              })
            }
          </main>


        </div>
      );
    } else {
      return (<div className='chatview-container'><img src={Loading} alt=" Logo" /></div>
      );
    }
  }
}

export default withStyles(styles)(ChatViewComponent);