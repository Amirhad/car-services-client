import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';;

function SignInUp() {

  const [open, setOpen] = useState(false)

  const [login, setLogin] = useState('')

  const [password, setPassword] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <div className='form'>
        <Button onClick={handleClickOpen}>Sign up</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>log in to service</DialogContentText>
            {/* <TextField 
            autoFocus
            margin='dense'
            id='name'
            label='Email Adress'
            type='email'
            fullWidth
            />
            <TextField 
            autoFocus
            margin='dense'
            id='pass'
            label='Password'
            type='password'
            fullWidth
            /> */}
            <input type="text"
            value={login} 
            placeholder='Введите email'
            onChange={(e) => setLogin(e.target.value)}/>
            <input type="text" 
            value={password} 
            placeholder='Введите пароль'
            onChange={(e) => setPassword(e.target.value)}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>Зарегестрироваться</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default SignInUp;
