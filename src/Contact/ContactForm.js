import React, { useState } from 'react';
import { Box, Button, Collapsible, Form, Paragraph, TextInput, TextArea } from 'grommet';
import { Close } from 'grommet-icons'

function ContactForm() {

  const INITIAL_STATE = { name: '', email: '', message: '' };
  const [value, setValue] = useState(INITIAL_STATE);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = ({ value }) => {
    setValue(INITIAL_STATE);
    setShowAlert(true);
    console.log('submitted');
  };

  const handleChange = (data) => {
    setShowAlert(false);
    setValue(data)
  }

  const props = {
    main: {
      pad: { horizontal: 'medium' },
      width: '500px'
    },
    form: {
      value,
      onChange: handleChange,
      onSubmit: handleSubmit,
      info: {
        name: 'Please enter a name.'
      }
    },
    formBox: {
      gap: 'small',
    }
  }

  return (
    <Box {...props.main}>
      <Form {...props.form}>
        <Box {...props.formBox}>
          <TextInput name="name" placeholder="Name" required />
          <TextInput name="email" placeholder="Enter Email" required />
          <Box height='150px'>
            <TextArea name="message" placeholder="Your Message" fill required />
          </Box>
          <Collapsible open={showAlert}>
            <Box direction='row' justify='between' background='status-ok'>
              <Box width='15px'></Box>
              <Paragraph margin='xsmall' size='small' alignSelf='center'>Your message was successfully sent. Thank you!</Paragraph>
              <Box border justify='center' align='end' onClick={()=>setShowAlert(false)}>
                <Close size='small'/>
              </Box>
            </Box>
          </Collapsible>
          <Button type="submit" primary label="Submit" alignSelf='end' />
        </Box>
      </Form>
    </Box>
  );
}

export default ContactForm;