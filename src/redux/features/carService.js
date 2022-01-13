const initialState = {
  carServices: [],
  loading: false,
  error: null,
};

export const carService = (state = initialState, action) => {
  switch (action.type) {
    case "carService/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "carService/load/fulfilled":
      return {
        ...state,
        carServices: action.payload,
        loading: false,
      };
    case "carService/load/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "carService/create/pending":
      return {
        ...state,
        loading: true,
      };
    case "carService/create/fulfilled":
      return {
        ...state,
        carServices: [...state.carServices, action.payload],
        loading: false,
      };
    case "carService/create/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "carService/delete/pending":
      return {
        ...state,
        loading: true,
      };
    case "carService/delete/fulfilled":
      return {
        ...state,
        carServices: state.carServices.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          }
        }),
        loading: false,
      };
    case "carService/delete/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "carService/update/pending":
      return {
        ...state,
        loading: true,
      };
    case "carService/update/fulfilled":
      return {
        ...state,
        carServices: state.carServices.map((item) => {
          if (item._id === action.payload) {
          }
        }),
      };

    case "carService/update/image/fulfilled":
      return {
        ...state,
        carServices: state.carServices.map((item) => {
          if (item._id === action.payload._id) {
            item.img = action.payload.img
            return item
          }
          return item
        })
      }

    default:
      return state;
  }
};

export const uploadAvatar = (file, id) => {
  return async (dispatch, getState) => {
    const state = getState();

    dispatch({ type: "carService/update/image/pending" });
    try {
      const formData = new FormData();
      formData.append("img", file);
      const res = await fetch(`http://localhost:4000/carservice/${id}/avatar`, {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${state.authentication.token}`,
        },
      });
      const data = await res.json();

      dispatch({ type: "carService/update/image/fulfilled", payload: data });
    } catch (error) {
      dispatch({ type: "carService/update/image/rejected", payload: error });
    }
  };
};

export const loadCarServices = () => {
  return async (dispatch) => {
    dispatch({ type: "carService/load/pending" });
    try {
      const res = await fetch("http://localhost:4000/carservice");
      const carServices = await res.json();

      dispatch({ type: "carService/load/fulfilled", payload: carServices });
    } catch (e) {
      dispatch({ type: "carService/load/rejected", payload: e });
    }
  };
};
