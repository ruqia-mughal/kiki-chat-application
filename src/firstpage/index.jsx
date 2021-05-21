import React, { Component } from 'react'
import "./style.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { motion } from "framer-motion";

import PageTransition from 'react-router-page-transition';

import ParticlesBg from 'particles-bg'

import Button from '@material-ui/core/Button';
import { Fragment } from 'react';

const pageTransition = {
  btn: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 360, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "70%"], opacity: 1.3,

  },

  in: {
    opacity: 1,

    y: 0
  },
  out: {
    opacity: 0,
    y: "-100%",
    scale: 1,
  }
}
class FirstPage extends Component {

  gotologin = () => {
    this.props.history.push("/login")
  }
  render() {
  


    return (
      <Fragment >


    
       <ParticlesBg  num={2}  type="lines" bg={true} />
       <ParticlesBg  num={1}   type="square" bg={true} />
  
       <ParticlesBg  num={1}   type="polygon" bg={true} />

        <PageTransition >
          <motion.div className="firstpage1">
   
            <h1 className="heading12">KiKi   Chat App </h1>  
         
            <p className="strtchat"> start chat by  creating account <span className="arrow"><ArrowForwardIosIcon fontSize="small" /></span>  </p>

            
            <div className="box">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>

            </div>
          </motion.div>


          <motion.div className="firstpage transition-item"
            whileHover={{ scale: .9, transition: { duration: 0.3 }, ease: [0.7, 0, 0.13, 0] }}
            whileTap={{ scale: .8 }}
            initial="out"
            animate="in"
            variants={pageTransition}
            exit={{ opacity: 1 }}
            >

            <motion.div 
            animate="btn"
              initial="out"
              variants={pageTransition}
              exit={{ opacity: 1 }}
              className="btndiv" >
              <Button variant="contained" color="secondary" onClick={this.gotologin} className="strtbtn">Get Started</Button>
            

            </motion.div>

            <motion.div className="use">
              <p>Kiki chat app is one to one chatting app where user can chat and share pictures  , feelings to express ourselves better and more 
                imaginatively through emojis etc </p>
            </motion.div>
            <motion.div className="about">
              <h3>About App and team </h3>
              <p>Kiki instant messaging app is created by : </p>
              <ul><li>Ruqia bibi </li><li>muqaddas irfan </li></ul>
            </motion.div>

          </motion.div>

        </PageTransition>
      </Fragment>
    )
  }
}
export default FirstPage;
