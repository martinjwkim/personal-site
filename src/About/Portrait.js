import React from 'react';
import { Box, Image } from 'grommet';
import { useInView } from 'react-hook-inview'
import frame from '../images/frame.png'

const Portrait = ({ size }) => {

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      overflow: 'visible',
      height: size === 'small' ? 'small' : { max: 'medium' },
      width: size === 'small' ? 'small' : { max: 'medium' },
      fill: size==='small'? false : true,
      ref,
      animation: {
        type: inView ? 'fadeIn' : 'fadeOut',
        delay: 100,
        duration: 4000,
        size: 'medium'
      },
      className: 'Portrait'
    },
    image: {
      fit: "cover",
      src: "/portrait.png",
      className: 'ProfilePic'
    }
  }

  return (
    <Box {...props.main}>
      <Image {...props.image} />
      {size!=='small' && <img src={frame} alt='frame' className='frame' />}
    </Box>
  )
}

export default Portrait;