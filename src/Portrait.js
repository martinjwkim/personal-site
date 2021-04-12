import React from 'react';
import { Box, Image } from 'grommet';
import { useInView } from 'react-hook-inview'


const Portrait = ({size}) => {

  const [ref, inView] = useInView({
    threshold: 0
  });

  const props = {
    main: {
      width: size==='medium' ? size : '50vw',
      height: size==='medium' ? size : '50vw',
      round: 'full',
      overflow: 'hidden',
      ref,
      animation: {
        type: inView ? 'fadeIn' : 'fadeOut',
        delay: 300,
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