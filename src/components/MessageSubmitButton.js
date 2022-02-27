import React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

import { pushMessage } from '../firebase';

const MessageSubmitButton = ({ name, setText, text }) => {
  return (
    <IconButton 
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'はむさん', text })
        setText('');
      }}
    >
      <SendIcon />
    </IconButton>
  );
}

export default MessageSubmitButton;