import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';

import {createService} from '../../redux/features/authentication'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function SignInUp() {

  const signinUp = useSelector(state => state.authentication.signingUp)
  const error = useSelector(state => state.authentication.error)

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = () => {
    dispatch(createService(login, password))
  }


  return (
    <div>
      <div className='form'>
        {error}
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
              onChange={(e) => setLogin(e.target.value)} />

            <input type="password"
              value={password}
              placeholder='Введите пароль'
              onChange={(e) => setPassword(e.target.value)} />

          </DialogContent>
          <DialogActions>
            <Button 
            onClick={handleSubmit} 
            disabled={signinUp}
            color='primary'>Зарегестрироваться</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default SignInUp;
