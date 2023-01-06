import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function AlertMassage({ message, type }) {
  const [open, setOpen] = React.useState(true);
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (    
    <>
    { 
     type === 'success' ? 
        <div>
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={open}            
            onClose={handleClose}                        
        >
            <Alert severity='success'>{message}</Alert>
        </Snackbar>
        </div>
      : type === 'info' ? 
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={open}                
                onClose={handleClose}                        
            >
                <Alert severity='success'>{message}</Alert>
            </Snackbar>
        </div>
        : type === 'error' ? 
        <div>
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
            open={open}            
            onClose={handleClose}                        
        >
            <Alert severity='error'>{message}</Alert>
        </Snackbar>
        </div>
          : ''
        
    }  
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={typeof type !== 'undefined' ? true : false}        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {console.log(type)}
    </>
  )
}
