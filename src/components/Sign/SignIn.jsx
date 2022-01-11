import { logIn } from "../../redux/features/authentication";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sign.module.css";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

function SignIn() {
  const signIn = useSelector((state) => state.authentication.signin);
  const error = useSelector((state) => state.authentication.error);
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();

  const [tologin, setToLogin] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({})
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logIn(tologin, password));
  };
  
  if(token) {
    navigate('/')
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setFormError(validate(tologin))
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.toLogin) {
      errors.toLogin = 'email is required'
    }
    else if (!regex.test(values.toLogin)) {
      errors.toLogin = "This is not a valid email format!";
    } if (!values.password) {
      errors.password = 'required is password'
    } else if (values.password.length < 5) {
      errors.password = 'password must be more than five characters'
    }
    return errors
  }



  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.block}>
        <h2>Авторизация</h2>
        <h3 className={styles.error__authorization}>{error}</h3>
        <div>
          <TextField
            id="standard-basic"
            label="Login"
            variant="standard"
            type="text"
            value={tologin}
            placeholder="Введите логин"
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
  );
}

export default SignIn;
