import React from 'react';
import CurvedArrow from 'react-curved-arrow'

const Arrows = () => {

  const props = {
    socials: {
      fromSelector: '.socials-start',
      toSelector: '.socials-end',
      toOffsetX: -40,
      toOffsetY: -200,
      fromOffsetX: 80,
      fromOffsetY: -20,
      width: 4,
      middleX: 50,
      middleY: -100,
      color: 'purple'
    }
  }

  return (
    <>
    <CurvedArrow {...props.socials} />
    </>
  )
}

export default Arrows;
