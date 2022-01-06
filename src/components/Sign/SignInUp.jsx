import { createService } from '../../redux/features/authentication'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import styles from './sign.module.css'
import { Link, useNavigate } from 'react-router-dom';

function SignInUp() {

  // const signinUp = useSelector(state => state.authentication.signingUp)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = () => {
    dispatch(createService(login, password))
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
            placeholder="Name" />
          <input 
          type="text" 
          placeholder='login'/>
        </div>
        <div>
          <input
            type="text"
            value={login}
            placeholder="Введите email"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="text"
            value={password}
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input 
          type="text" 
          placeholder='city'/>
          <input 
          type="text" 
          placeholder='street'/>
        </div>
        <div>
          <input type="file" />
        </div>
        <div>
          <button
            className={styles.btn}
            // disabled={signinUp}
            onClick={handleSubmit}>
            Регистрация
          </button>
        </div>
        <span>Уже есть аккаунт?</span>
        <Link to='/signin'>Войти</Link>
      </div>
    </form>
  );
}

export default SignInUp;
