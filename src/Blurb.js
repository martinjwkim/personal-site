import React from 'react';
import { Box, Paragraph } from 'grommet';
import { useInView } from 'react-hook-inview'

const Blurb = ({ icon, paragraph }) => {

  const [ref, inView] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  const props = {
    main: {
      direction: 'row',
      align: 'center',
      gap: 'small',
      animation: inView ? [
        {
          type: 'slideLeft',
          delay: 300,
          duration: 2000,
          size: 'medium'
        },
        {
          type: 'fadeIn',
          delay: 0,
          duration: 2000,
        },
      ] : 'fadeOut',
      ref
    },
    paragraph: {
      fill: true,
      size: 'small',
      margin: 'none',
      alignSelf: 'start'
    }
  }

  return (
    <Box {...props.main}>
      {icon}
      <Paragraph {...props.paragraph}>{paragraph}</Paragraph>
    </Box>
  )
}

export default Blurb;