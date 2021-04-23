import React from 'react';
import background from './imac-cropped.png'
import natureBackground from './nature-background.jpg'

const Background = ({ animationType }) => {

  return (
    <div className='Background'>
      <img src={background} alt='background' className={`computer-background ${animationType}`} />
      <img src={natureBackground} alt='nature-background' className='nature-background'/>
    </div>
  )
}

export default Background;