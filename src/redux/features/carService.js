const initialState = {
  carServices: [],
  loading: false,
  error: null
};

export const carService = (state = initialState, action)=> {
  switch (action.type) {
    case 'carService/load/pending':
      return {
        ...state,
        loading: true,
      }
    case 'carService/load/fulfilled':
      return {
        ...state,
        carServices: action.payload,
        loading: false,
      }
    case 'carService/load/rejected':
      return {
        ...state,
        error: action.payload
      }
    case 'carService/create/pending':
      return {
        ...state,
        loading: true
      }
    case 'carService/create/fulfilled':
      return {
        ...state,
        carServices: [...state.carServices, action.payload],
        loading: false
      }
    case 'carService/create/rejected':
      return {
        ...state,
        error: action.payload
      }
    case 'carService/delete/pending':
      return {
        ...state,
        loading: true
      }
    case 'carService/delete/fulfilled':
      return {
        ...state,
        carServices: state.carServices.filter((item)=> {
          if(item._id !== action.payload) {
            return item
          }
        }),
        loading: false
      }
    case 'carService/delete/rejected':
      return {
        ...state,
        error: action.payload
      }
    case 'carService/update/pending':
      return {
        ...state,
        loading: true
      }
    case 'carService/update/fulfilled':
      return {
        ...state,
        carServices: state.carServices.map((item)=> {
          if(item._id === action.payload) {
          }
        })
      }
    default:
      return state;
  }
}

export const loadCarServices = () => {
  return async (dispatch) => {
    dispatch({type: 'carService/load/pending'});
    try {
      const res = await fetch('http://localhost:4000/carservice')
      const carServices = await res.json();

      dispatch({ type: 'carService/load/fulfilled', payload: carServices });
    }catch (e) {
      dispatch({type: 'carService/load/rejected', payload: e});
    }
  }
}