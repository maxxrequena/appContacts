import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Typography
} from '@mui/material';
import { AiOutlineMore } from "react-icons/ai";



const OpenDialog = ({comments}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="inherit" color="primary" onClick={handleClickOpen}>
      <AiOutlineMore/> 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{maxWidth:"100%"}}
      >
        <DialogTitle 
        id="alert-dialog-title"
        ><Typography
        component="h1"
        variant="h5" 
        >Comments</Typography></DialogTitle>
        <DialogContent dividers>
          <DialogContentText 
          id="alert-dialog-description"
          >{comments} 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Salir
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OpenDialog;