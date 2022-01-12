import { logIn } from "../../redux/features/authentication";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

function SignIn() {
  const signIn = useSelector((state) => state.authentication.signin);
  const error = useSelector((state) => state.authentication.error);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const [tologin, setToLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logIn(tologin, password));
  };

  if (token) {
    navigate('/')
  }

  const handleLogin = (e) => {
    e.preventDefault();
  };



  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.image}>
          <img src="https://service.bots.urent.ru/img/img-01.452e4503.png" alt="" />
        </div>
        <div className={styles.block}>
          <h2>Авторизация</h2>
          <h3 className={styles.error__authorization}>{error}</h3>
          <div>
            <TextField
              id="standard-basic"
              label="email"
              variant="standard"
              type="email"
              value={tologin}
              placeholder="Введите email"
              onChange={(e) => setToLogin(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="password"
              variant="standard"
              type="password"
              value={password}
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className={styles.btn}
              disabled={!tologin || !password || signIn}
              onClick={handleSubmit}
            >
              Войти
            </button>
          </div>
          <span>У вас нет акаунта?</span>
          <Link to="/signup">Регистрация</Link>
          <div className={styles.homeButton}>
            <Link to="/">Главное меню</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
