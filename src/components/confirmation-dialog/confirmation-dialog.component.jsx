import React from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

const ConfirmationDialog = (props) => {
  const { message, handleClose, isOpen } = props;
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Custom Prompt</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose(true);
          }}
        >
          OK
        </Button>
        <Button
          onClick={() => {
            handleClose(false);
          }}
        >
          CANCEL
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
