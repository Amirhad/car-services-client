import { logIn } from '../../redux/features/authentication'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './sign.module.css'
import { useDispatch, useSelector } from 'react-redux'

function SignIn() {
  const signIn = useSelector(state => state.authentication.signin)
  const error = useSelector(state => state.authentication.error)
  const dispatch = useDispatch()

  const [tologin, setToLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(logIn(tologin, password))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (

    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.block}>
        {error}
        <h2>Авторизация</h2>
        <div>
          <input
            type="text"
            value={tologin}
            placeholder="Введите email"
            onChange={(e) => setToLogin(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
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
      </div>
    </form>

  );
}

export default SignIn;
