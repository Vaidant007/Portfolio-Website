import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandLeetcode } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
const Social = () => {
  return (
   
    <div className="home__social">
        
        <a href="https://www.linkedin.com/in/vaidant-shrivastava-264552297/" className="home__social-icon" target='_blank'><SlSocialLinkedin /></a>
        <a href="https://leetcode.com/u/Vaidant007/" className="home__social-icon" target='_blank'><SiLeetcode /></a>
        <a href="https://github.com/Vaidant007" className="home__social-icon" target='_blank'><FiGithub /></a>
        <a href="https://www.geeksforgeeks.org/user/vaidantshricac/" className="home__social-icon" target='_blank'><SiGeeksforgeeks /></a>
        <a href="https://www.codechef.com/users/procoder30" className="home__social-icon" target='_blank'><SiCodechef /></a>
    </div>
    
  )
}

export default Social