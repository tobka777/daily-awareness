import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { gql, useMutation } from "@apollo/client";
import Toast from '../components/Toast';



function AddMessage() {
  const [visible, setVisible] = React.useState(false);
 const ADD_MSG = gql`
   mutation($msg: String!) {
    insert_messages_one(object: {message: $msg, user_id: 1}) {
      id
      created_at
    }
  }
 `;
 const [addMsg] = useMutation(ADD_MSG);
 const [msgInput, setMsgInput] = React.useState('');

 

  const handleSubmit = (event) => {
    event.preventDefault();
    addMsg({variables: {msg: msgInput }}).then(() => {
      return setVisible(true);
    });
  };

  return <Container maxWidth="sm">
    <h2>Neuer Bewusstseinsspruch</h2>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Spruch"
        multiline
        variant="filled"
        onChange={e => (setMsgInput(e.target.value))}
      />
      <Button variant="contained" color="primary" type="submit">
      Speichern
      </Button>
    </form>
    <Toast text="Gespeichert!" severity="success" visible={visible}></Toast>

  </Container>;
}

export default AddMessage;