import React from 'react';
import background from './imac-cropped.png'

const Background = () => {

  return (
    <div className='Background'>
      <img src={background} alt='background' id='background-img'/>
    </div>
  )
}

export default Background;