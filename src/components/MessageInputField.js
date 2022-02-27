import React, {useState} from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../gravatar';
import MessageField from './MessageField';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

const MessageInputField = ({ name }) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1} item={true}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid xs={10} item={true}>
          <MessageField name={name} setText={setText} text={text}/>
        </Grid>
        <Grid xs={1} item={true}>ボタン</Grid>
      </Grid>
    </div>
    );
};

export default MessageInputField;