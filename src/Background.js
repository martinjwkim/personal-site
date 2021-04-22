import React from 'react';
import background from './imac-cropped.png'

const Background = ({ animationType }) => {

  return (
    <div className='Background'>
      <img src={background} alt='background' className={animationType} />
    </div>
  )
}

export default Background;