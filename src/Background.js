import React from 'react';
import background from './imac-combined.png'

const Background = ({ animationType }) => {

  return (
    <div className='Background'>
      <img src={background} alt='background' className={`computer-background ${animationType}`} />
    </div>
  )
}

export default Background;