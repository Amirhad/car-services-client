import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './sign.module.css'
import {useDispatch, useSelector} from 'react-redux'
// import auth from '../../redux/features/authentication'

function SignIn() {
  const dispatch = useDispatch()
  const signIn = useSelector(state => state.authentication.signin)

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    // dispatch(auth(login, password))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (

    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.block}>
        <h2>Авторизация</h2>
        <div>
          <input
            type="text"
            value={login}
            placeholder="Введите email"
            onChange={(e) => setLogin(e.target.value)}
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
