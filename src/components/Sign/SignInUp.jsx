import { createService } from '../../redux/features/authentication'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from './sign.module.css'
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function SignInUp() {

  const signinUp = useSelector(state => state.authentication.signingUp)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const [login, setLogin] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [text, setText] = useState('')
  const [img, setImg] = useState('')


  const handleSubmit = () => {
    dispatch(createService(email, password, login, name, city, street, number, phone, text, img))
    navigate('/signin')
    
  }
  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.block}>
          <h1>Регистрация</h1>
          <div>
            <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="file" />
          </div>
          <div className={styles.inputTop}>
            <TextField
              id="standard-basic" label="name" variant="standard"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)} />
            <TextField
              id="standard-basic" label="login" variant="standard"
              type="text"
              value={login}
              placeholder='login'
              onChange={(e) => setLogin(e.target.value)} />
          </div>
          <div>
            <TextField
              id="standard-basic" label="Email" variant="standard"
              type="text"
              value={email}
              placeholder="Введите email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="standard-basic" label="password" variant="standard"
              type="password"
              value={password}
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <h2>Адрес</h2>
            <TextField
              id="standard-basic" label="city" variant="standard"
              type="text"
              value={city}
              placeholder='city'
              onChange={(e) => setCity(e.target.value)} />
            <TextField
              id="standard-basic" label="street" variant="standard"
              type="text"
              value={street}
              placeholder='street'
              onChange={(e) => setStreet(e.target.value)} />
            <TextField
              id="standard-basic" label="number" variant="standard"
              type="text"
              value={number}
              placeholder='number'
              onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div>
            <h2>Номер телефона</h2>
            <TextField
              id="standard-basic" label="phone" variant="standard"
              type="tel"
              value={phone}
              placeholder='phone'
              onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <textarea
              className={styles.textarea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10">напишите текст</textarea>
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
  );
}

export default SignInUp;
