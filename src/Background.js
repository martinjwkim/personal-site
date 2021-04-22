import React from 'react';
import background from './imac-cropped.png'

const Background = ({ backgroundRef, animationType }) => {

  return (
    <div className='Background'>
      <img src={background} alt='background' ref={backgroundRef} className={animationType}/>
    </div>
  )
}

export default Background;