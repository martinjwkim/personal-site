import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from './ContactForm'
import Footer from './Footer'

function Contact({ size }) {

  const props = {
    main: {
      background: { "dark": "dark-1", "light": "light-4" },
      height: '100vh',
      align: 'center',
      justify: 'center',
      gap: 'small'
    },
    heading: {
      level: 2,
      margin: 'none',
    },
    sub: {
      level: 4,
      margin: {bottom: 'medium', top: 'none'},
    }
  }

  return (
    <Box {...props.main}>
      <Heading {...props.heading}>CONTACT</Heading>
      <Heading {...props.sub}>I'd love to hear from you!</Heading>
      <ContactForm />
      <Footer />
    </Box>
  );
}

export default Contact;