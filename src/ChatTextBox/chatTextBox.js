import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './styles';
import "./style.css"
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Picker, {SKIN_TONE_MEDIUM_LIGHT } from 'emoji-picker-react';

import CancelIcon from '@material-ui/icons/Cancel';
import MoodIcon from '@material-ui/icons/Mood';

import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import "../Dashboard/dashboard.js";
import { Fragment } from 'react';

class ChatTextBoxComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chatText: '',
      id: Date.now(),
      show: false,
      stateemoji: [],
      chosenEmoji: [],
      anchorEl: null,
      // reader:null,

    };
  }

  onEmojiClick = (code, emoji) => {
    // var r=this.state.chosenEmoji.replace(/,/g, '');
    this.setState({
      chosenEmoji: [...this.state.chosenEmoji, emoji.emoji],

    });

    console.log(this.state.chosenEmoji)
  };
  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
  empty = () => this.setState({ chosenEmoji: "" });
  openEmoji = () => this.state.chosenEmoji;


  render() {

    const { classes } = this.props;

    return (
      <Fragment>
        
        
          <div className={classes.root}>
        <Grid container>


          <Grid item xs={2} sm={2} md={1} lg={1} >

            <p onClick={this.toggle}>{this.state.show ? <CancelIcon onClick={this.empty} /> : <MoodIcon onClick={this.openEmoji} />}</p>
         <div onChange={(e)=>this.state.chatText = e.target.value}>

        
            {this.state.show && <Picker   onEmojiClick={this.onEmojiClick} groupNames={{
            smileys_people: 'yellow faces',
             animals_nature: 'cute dogs and also trees',
            food_drink: 'milkshakes and more',
             travel_places: 'I love trains',
            activities: 'lets play a game',
            objects: 'stuff',
            symbols: 'more stuff',
            flags: 'fun with flags',
            recently_used: 'did I really use those?!',

  }} skinTone={SKIN_TONE_MEDIUM_LIGHT}  pickerStyle={{ position:"absolute",top:"50px" }} />}
   </div>
          </Grid>

          <Grid item xs={10} sm={10} md={11} lg={11}>

            <div className={classes.chatTextBoxContainer}>
              <TextField placeholder='Type your message...' onKeyUp={(e) => this.userTyping(e)} id='chattextbox'
                value={this.state.show === true ? this.state.chosenEmoji : null}
                className={classes.chatTextBox}
                onFocus={this.userClickedInput}>
              </TextField>
              <Send onClick={this.submitMessage} disabled={!this.state.chatText} className={classes.sendBtn}></Send>
              <div>


              </div>
            </div>
          </Grid>

        </Grid>
      </div>
   
      </Fragment>
    );

  }






  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })

  };
  handleClose = () => {
    this.setState({ anchorEl: null })

  };

  sendimg = (e) => {
    var file = e.target.files[0];
    console.log("e====>", e.target)
    console.log("e====>", file)

    if (!file.type.match("image.*")) {
      alert("select img only");

    }
    else {
      alert(" img send");
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        alert(reader.result);

      }, false)
      // this.setState({ reader:reader.result })
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({ chatText: e.target.value });
  messageValid = (txt) => txt && txt.replace(/\s/g, '').length;
  userClickedInput = () => this.props.userClickedInputFn();
  submitMessage = () => {
    this.setState({ chatText: "", chosenEmoji: "" })
    if (this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      // this.props.submitMessageFn(this.state.reader);
      document.getElementById('chattextbox').value = '';
    }
  }
}

export default withStyles(styles)(ChatTextBoxComponent);