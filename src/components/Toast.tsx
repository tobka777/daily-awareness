import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Toast({text, severity, visible}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(visible);
  }, [visible]);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  return <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert severity={severity} onClose={handleClose}>
    {text}
  </Alert>
</Snackbar>;
}

export default Toast;