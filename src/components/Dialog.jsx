import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function AlertDialog({ hapus, setHapus }) {

  const [dialogs, setDialogs] = React.useState(false);
  const [backdrops, setBackdrops] = React.useState(false);

  const handleClickOpen = () => {
    setDialogs(true)    
    setBackdrops(true)
  };

  const handleClose = () => {
    setDialogs(false)
    setBackdrops(false)
    // setDialog(false);
    // setBackdrop(false)
    setHapus('')
  };

  const handleConfirm = () => {
    setHapus((hapus) => ({ type : 'confirm', id : hapus.id}))
  }

  // React.useEffect(()=> {
  //   if(hapusStatus === 'confirm'){
  //     console.log(hapusStatus)
  //   }
    
  // },[])

  return (
    <div>         
      <Dialog
        open={hapus === 'ask' ? true : false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Anda akan menghapus data?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Apakah anda yakin untuk menghapus data ini?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={handleConfirm} color='error'>
            Hapus
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={hapus === 'confirm' ? true : false}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}