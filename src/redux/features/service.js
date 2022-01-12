const initialState = {
  services: [],
  loading: false,
  error: null,
};

export const service = (state = initialState, action) => {
  switch (action.type) {
    case "service/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/load/fulfilled":
      return {
        ...state,
        loading: false,
        services: action.payload,
      };
    case "service/load/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "service/create/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/create/fulfilled":
      return {
        ...state,
        services: [...state.services, action.payload],
        loading: false,
      };
    case "service/create/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "service/delete/pending":
      return {
        ...state,
        loading: true,
      };
    case "service/delete/fulfilled":
      return {
        ...state,
        services: state.services.filter((item) => {
          if (item._id === action.payload) {
            return item;
          }
        }),
        loading: false,
      };
    case "service/delete/rejected":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const loadService = () => {
  return async (dispatch) => {
    dispatch({ type: "service/load/pending" });
    try {
      const res = await fetch("http://localhost:4000/services");
      const service = await res.json();
      dispatch({ type: "service/load/fulfilled", payload: service });
    } catch (e) {
      dispatch({ type: "service/load/rejected", payload: e });
    }
  };
};

export const createService = (name, price) => {
  return async (dispatch) => {
    dispatch({ type: "service/create/pending" });
    try {
      const res = await fetch("http://localhost:4000/services", {
        method: "POST",
        body: JSON.stringify({ name, price }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      dispatch({ type: "service/create/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "service/create/rejected", payload: e });
    }
  };
};

export const deleteService = (id) => {
  return async (dispatch) => {
    dispatch({ type: "service/delete/pending" });
    try {
      const res = await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE",
      });
      const json = res.json();

      dispatch({ type: "service/delete/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "service/delete/rejected", payload: e });
    }
  };
};
