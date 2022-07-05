import {Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React, {useContext, useRef, useState} from "react";


export enum Color {
  RED,
  GREEN,
  BLUE
}

function generateDisplayame(inputTitle: string) {
  return undefined;
}

export const DialogProto = (
  /** @caption Dialog title **/ title: string,
  /** @caption Random number **/ number: number,
  /** @caption Random boolean **/ boolean: boolean,
  /** @caption Color enum **/ color: Color,
  /** @caption Union type **/ dialogInputMode: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
) => {

  // hooks
  const [open, setOpen] = useState(boolean)

  const inputTitle = title
  const inputNumber = number
  const inputColor = color

  // other expressions (functions, variables)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // JSX
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      inputMode={dialogInputMode}>
      <DialogTitle id="alert-dialog-title">
        {generateDisplayame(inputTitle)}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button>Disagree</Button>
        <Button autoFocus>
          Agree
        </Button>
      </DialogActions>
      <Alert severity="info">This is an info alert — check it out!</Alert>
    </Dialog>
  );
}
