import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from './ContactForm'
import paper from '../images/paper.png'

function Contact() {

  const props = {
    main: {
      height: { min: 'large' },
      justify: 'between',
      fill: 'horizontal',
      width: { max: '1200px' },
      alignSelf: 'center',
    },
    contact: {
      align: 'center',
      justify: 'center',
      gap: 'small',
      pad: { top: 'xlarge' },
      className: 'Contact'
    },
    heading: {
      level: 2,
      margin: 'none',
    },
    sub: {
      level: 4,
      margin: { bottom: 'medium', top: 'none' },
    },
  }

  return (
      <Box {...props.main}>
        <Box {...props.contact}>
          <img src={paper} alt='paper' className='paper' />
          <Heading {...props.heading}>CONTACT ME</Heading>
          <Heading {...props.sub}>I'd love to hear from you!</Heading>
          <ContactForm />
        </Box>
      </Box>
  );
}

export default Contact;