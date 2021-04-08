import React from 'react';
import { Box } from 'grommet';
import ContactForm from './ContactForm'

function Contact({ size }) {

  const props = {
    main: {
      background: { "dark": "dark-1", "light": "light-4" },
      height: '100vh',
      align: 'center',
      justify: 'evenly',
    },
  }

  return (
    <Box {...props.main}>
      <ContactForm />
    </Box>
  );
}

export default Contact;