import { createService } from "../../redux/features/authentication";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

function SignInUp() {
  const signinUp = useSelector((state) => state.authentication.signingUp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");


  const handleSubmit = () => {

    dispatch(
      createService(
        email,
        password,
        name,
        city,
        street,
        number,
        phone,
        text,

      )
    );
    navigate("/signin");
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };


  return (
    <div className={styles.container}>
      <div className={styles.form} onSubmit={handleLogin}>
        <div className={styles.block}>
          <h1>Регистрация</h1>
          <div className={styles.inputTop}>
            <TextField
              id="standard-basic"
              label="name"
              variant="standard"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              value={email}
              placeholder="Введите email"
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <h2>Адрес</h2>
            <TextField
              id="standard-basic"
              label="city"
              variant="standard"
              type="text"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="street"
              variant="standard"
              type="text"
              value={street}
              placeholder="street"
              onChange={(e) => setStreet(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="number"
              variant="standard"
              type="number"
              value={number}
              placeholder="number"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div>
            <h2>Номер телефона</h2>
            <TextField
              id="standard-basic"
              label="phone"
              variant="standard"
              type="tel"
              value={phone}
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className={styles.textarea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              name=""
              id=""
              cols="30"
              placeholder="text"
              rows="10"
            />
          </div>
          <div>
            <button
              className={styles.btn}
              disabled={signinUp ||
                !email ||
                !password ||
                !name ||
                !city ||
                !street ||
                !number ||
                !phone ||
                !text}
              onClick={handleSubmit}
            >
              Регистрация
            </button>
          </div>
          <span>Уже есть аккаунт?</span>
          <Link to="/signin">Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default SignInUp