import React from 'react';
import keyboard from '../images/keyboard.png'
import coffee from '../images/coffee.png'
import plant from '../images/plant.png'

const Images = () => {

  return (
    <>
      <img src={keyboard} alt='keyboard' className='keyboard' />
      <img src={plant} alt='plant' className='plant' />
      <div className='coffee'>
        <img src={coffee} alt='coffee' className='coffee-transform' />
      </div>
    </>
  )
}

export default Images;