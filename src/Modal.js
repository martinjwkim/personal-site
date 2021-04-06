import React from 'react';
import { Layer } from 'grommet';

const Modal = ({modalComponent, setModalComponent}) => {

  const props = {
    main: {
      onClickOutside: () => setModalComponent(),
      background: {
        opacity: 'strong',
        color: 'black'
      },
      full: true,
      margin: 'medium',
    },
  }

  return (
    <Layer {...props.main}>
      {modalComponent}
    </Layer >
  )
}

export default Modal;