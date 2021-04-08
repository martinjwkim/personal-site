import React, { useState } from 'react';
import { Box, Form, FormField, TextInput, Button } from 'grommet';

function ContactForm() {

  const [value, setValue] = useState({});

  const props = {
    main: {
    },
  }

  return (
    <Box {...props.main}>
      <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => { }}
      >
        <FormField name="name" htmlFor="text-input-id" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
}

export default ContactForm;