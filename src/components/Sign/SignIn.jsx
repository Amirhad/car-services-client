import { logIn } from '../../redux/features/authentication'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './sign.module.css'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';

function SignIn() {
  const signIn = useSelector(state => state.authentication.signin)
  const error = useSelector(state => state.authentication.error)
  const token = useSelector(state => state.authentication.token)
  const dispatch = useDispatch()

  const [tologin, setToLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(logIn(tologin, password))
  }

  const handleLogin = (e) => {
    e.preventDefault()
  }

  if (token) {
    navigate('/')
  }
    return (
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.block}>
          {error}
          <h2>Авторизация</h2>
          <div>
            <TextField
              id="standard-basic" label="Email" variant="standard"
              type="text"
              value={tologin}
              placeholder="Введите Email"
              onChange={(e) => setToLogin(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic" label="password" variant="standard"
              type="password"
              value={password}
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className={styles.btn}
              disabled={signIn}
              onClick={handleSubmit}
            >Войти</button>
          </div>
          <span>У вас нет акаунта?</span>
          <Link to='/signup'>Регистрация</Link>
          <div className={styles.homeButton}>
            <Link to='/'>Главное меню</Link>
          </div>
        </div>
      </form>

    );

}

export default SignIn;
