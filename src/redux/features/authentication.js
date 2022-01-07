const initialState = {
  error: null,
  signingUp: false,
  signingIn: false,
  token: null,
  service: {},
  id: localStorage.getItem("id"),
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "authentication/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };
    case "authentication/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
      };
    case "authentication/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };
    case "authentication/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case "authentication/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        id: action.payload.json.id,
      };
    case "authentication/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    case "authentication/logout/fulfilled":
      return {
        ...state,
        token: null,
        id: null,
      };

    case "application/addAvatar/fullfilled":
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.payload,
        },
      };
    default:
      return state;
  }
};

export const addAvatar = (file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(`http://localhost:4000/carservice/avatar`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();

      dispatch({ type: "application/addAvatar/fullfilled", payload: json });
    } catch (e) {
      console.log(e);
    }
  };
};

export const createService = (email, password, login, name, city, street, number, phone, text, img) => {
  return async (dispatch) => {
    dispatch({ type: "authentication/signup/pending" });

    const res = await fetch("http://localhost:4000/carservice/register", {
      method: "POST",
      body: JSON.stringify({ email, password, login, name, city, street, number, phone, text, img }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await res.json();

    if (json.error) {
      dispatch({ type: "authentication/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "authentication/signup/fulfilled", payload: json });
    }
  };
};

export const logIn = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "authentication/signin/pending" });

    const res = await fetch("http://localhost:4000/carservice/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await res.json();
    if (json.error) {
      dispatch({ type: "authentication/signin/rejected", error: json.error });
    } else {
      dispatch({
        type: "authentication/signin/fulfilled",
        payload: { json },
      });
      localStorage.setItem("id", json.id);
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    dispatch({ type: "authentication/logout/fulfilled" });
    localStorage.clear();
  };
};
