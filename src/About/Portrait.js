import React from 'react';
import { Box, Image } from 'grommet';
import { useInView } from 'react-hook-inview'


const Portrait = ({ size }) => {

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      round: 'full',
      overflow: 'hidden',
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
    },
    image: {
      fit: "cover",
      src: "/portrait.png",
    }
  }

  return (
    <Box {...props.main}>
      <Image {...props.image} />
    </Box>
  )
}

export default Portrait;