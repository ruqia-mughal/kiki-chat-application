
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import CameraIcon from '@material-ui/icons/Camera';
// import ImageIcon from '@material-ui/icons/Image';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
// import firebase from 'firebase/app';
// import "firebase/auth"
// import "firebase/firestore"
// import "./App.css";

// export default function SimpleMenu(props) {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const chooseimg = () => {
//  document.getElementById("imageFile").click();

//   };
//   const chooseVideo = () => {
//     document.getElementById("videoFile").click();
//   };
//   const chooseFile = () => {
//     document.getElementById("allFile").click();
//   };

//  const sendimg = (e) => {
//   var file=e.target.files[0];
//   console.log("e====>",e.target)
//   console.log("e====>",file)

//  if (!file.type.match("image.*")) {
//    alert("select img only");
   
//  }
//  else{
//   alert(" img send");
// var reader=new FileReader();
// reader.addEventListener("load",function (){
//   alert(reader.result);


// //   firebase.firestore().collection("chats").doc(docKey).set({
// //     name: "Los Angeles",
  
// //     message:reader.result,
// // })
  
     

// },false)
// if(file){
//   reader.readAsDataURL(file);
// }
//  }
// };

//   return (
//     <div>
//       <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//       <AttachFileIcon />
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>

//         <MenuItem onClick={handleClose}><CameraIcon/></MenuItem>
//         <MenuItem onClick={chooseimg}> <ImageIcon /><input onChange={(e)=>sendimg(e)} type="file" id="imageFile" accept="image/*"  style={{display:"none"}} /></MenuItem>
//         <MenuItem onClick={chooseVideo} ><VideoLibraryIcon/><input type="file" id="videoFile" accept="video/*" style={{display:"none"}}/></MenuItem>
//         <MenuItem onClick={chooseFile} ><FileCopyIcon/><input type="file" id="allFile" accept="file/*"  style={{display:"none"}} /></MenuItem>
//       </Menu>
//     </div>
//   );
// }






