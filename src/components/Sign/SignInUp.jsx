import { createService } from '../../redux/features/authentication'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './sign.module.css'
import { Link, useNavigate } from 'react-router-dom';

function SignInUp() {

  const signinUp = useSelector(state => state.authentication.signingUp)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [toLogin, setToLogin] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImg] = useState('')


  const handleSubmit = () => {
    dispatch(createService(login, password, toLogin, name, city, street, img))
  }
  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.block}>
          <h2>Авторизация</h2>
          <div>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} />
            <input
              type="text"
              value={toLogin}
              placeholder='login'
              onChange={(e) => setToLogin(e.target.value)} />
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
              value={city}
              placeholder='city'
              onChange={(e) => setCity(e.target.value)} />
            <input
              type="text"
              value={street}
              placeholder='street'
              onChange={(e) => setStreet(e.target.value)} />
          </div>
          <div>
            <input type="file"
            value={img}
            onChange={(e) => setImg(e.target.value)}/>
          </div>
          <div>
            <button
              className={styles.btn}
              disabled={signinUp}
              onClick={handleSubmit}>
              Регистрация
            </button>
          </div>
          <span>Уже есть аккаунт?</span>
          <Link to='/signin'>Войти</Link>
        </div>
      </form>
    </>
  );
}

export default SignInUp;
