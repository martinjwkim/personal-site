import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from './ContactForm'
import Footer from './Footer'

function Contact({ size }) {

  const props = {
    main: {
      height: '100vh',
      justify: 'between'
    },
    contact: {
      align: 'center',
      justify: 'center',
      gap: 'small',
      pad: {top: 'xlarge'}
    },
    heading: {
      level: 2,
      margin: 'none',
    },
    sub: {
      level: 4,
      margin: { bottom: 'medium', top: 'none' },
    }
  }

  return (
    <Box {...props.main}>
      <Box {...props.contact}>
        <Heading {...props.heading}>CONTACT</Heading>
        <Heading {...props.sub}>I'd love to hear from you!</Heading>
        <ContactForm />
      </Box>
      <Footer />
    </Box>
  );
}

export default Contact;