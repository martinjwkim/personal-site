import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from './ContactForm'
import Footer from './Footer'
import paper from './paper.png'

function Contact({ scrollToTop }) {

  const props = {
    main: {
      height: { min: 'large' },
      justify: 'between',
      fill: 'horizontal',
      width: { max: '1200px' },
      alignSelf: 'center',
      className: 'Contact'
    },
    contact: {
      align: 'center',
      justify: 'center',
      gap: 'small',
      pad: { top: 'xlarge' },
      className: 'Contact-form'
    },
    heading: {
      level: 2,
      margin: 'none',
    },
    sub: {
      level: 4,
      margin: { bottom: 'medium', top: 'none' },
    },
    footer: {
      scrollToTop,
    },
  }

  return (
    <Box>
      <Box {...props.main}>
        <img src={paper} alt='paper' className='paper'/>
        <Box {...props.contact}>
          <Heading {...props.heading}>CONTACT ME</Heading>
          <Heading {...props.sub}>I'd love to hear from you!</Heading>
          <ContactForm />
        </Box>
      </Box>
      <Footer {...props.footer} />
    </Box>
  );
}

export default Contact;