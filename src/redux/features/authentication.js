const initialState = {
  error: null,
  signingUp: false,
  token: null,
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
    default:
      return state;
  }
};

export const createService = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "authentication/signup/pending" });

    const res = await fetch("http://localhost:4000/carservice/register", {
      method: "POST",
      body: JSON.stringify({ login, password }),
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
