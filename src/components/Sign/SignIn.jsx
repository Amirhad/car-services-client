import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './sign.module.css'

function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div className={styles.form}>
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
          <button className={styles.btn}>Войти</button>
        </div>
        <span>У вас нет акаунта?</span>
        <Link to='/signup'>Регистрация</Link>
      </div>
    </div>

  );
}

export default SignIn;
