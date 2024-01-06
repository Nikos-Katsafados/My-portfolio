import "./FooterStyles.css"
import  {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={
                {color:"#fff", marginRight: "2rem"}
              }/>
              <div>
                <p>Athens</p>
                <p>Greece</p>
              </div>
            </div>
            <div className="phone">
              <h4><FaPhone size={20} style={
                {color:"#fff", marginRight: "2rem"}
              }/>
              6979042552</h4>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={
                {color:"#fff", marginRight: "2rem"}
              }/> 
              nikoskatsaphados@gmail.com</h4>
            </div>
          </div>
          <div className="right">
                <h4>About me</h4>
                <p>My name is Nikos Katsafados and 
                  i love discussing for new projects and design challenges </p>
                  <div className="social">
                  <FaFacebook size={30} style={
                {color:"#fff", marginRight: "1rem"}
              }/> 
              <FaInstagram size={30} style={
                {color:"#fff", marginRight: "1rem"}
              }/> 
              <FaLinkedin size={30} style={
                {color:"#fff", marginRight: "1rem"}
              }/> 
                  </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;