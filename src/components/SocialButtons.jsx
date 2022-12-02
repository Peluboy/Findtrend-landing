import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/connect.css'

import FacebookLogo from '../assets/images/fb.svg'
import TwitterLogo from '../assets/images/tw.svg'
import DribbleLogo from '../assets/images/dr.svg'
import PinterestLogo from '../assets/images/pin.svg'
import MLogo from '../assets/images/m.svg'
import RedditLogo from '../assets/images/red.svg'
import VkLogo from '../assets/images/vk.svg'
import LinkedinLogo from '../assets/images/in.svg'

const SocialButtons = () => {


    const [logoState, changeState] = useState({
        activeLogos: null,
        buttonLogos : [
            {imgUrl: FacebookLogo},
            {imgUrl: TwitterLogo},
            {imgUrl: DribbleLogo},
            {imgUrl: PinterestLogo},
            {imgUrl: MLogo},
            {imgUrl: RedditLogo},
            {imgUrl: VkLogo},
            {imgUrl: LinkedinLogo},
        ]
    });

    function toogleActive(i) {
        changeState({ ...logoState, activeLogos: logoState.buttonLogos[i]});
    }

    function toggleActiveStyle(i){
        if(logoState.buttonLogos[i] === logoState.activeLogos) {
            return 'buttonActive'
        } else {
           return 'button'
        }
    }

  return (
    <>

    <div className='buttons'> 
        {
            logoState.buttonLogos.map((item, i) => (
            <motion.button 
                whileHover={{scale:1.05}}
                key={i}
                className={toggleActiveStyle(i)}
                onClick={() =>{toogleActive(i)}}
            >
                <img src={item.imgUrl} alt=''/>
            </motion.button>
            ))
        }
    </div>

    </>
  )
}

export default SocialButtons