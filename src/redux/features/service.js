const initialState = {
  services: [],
  loading: false,
  error: null
};

export const carService = (state = initialState, action)=> {
  switch (action.type) {
    case 'service/load/pending':
      return {
        ...state,
        loading: true,
      }
    case 'service/load/fulfilled':
      return {
        ...state,
        services: action.payload,
        loading: false,
      }
    case 'service/load/rejected':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export const loadServices = () => {
  return async (dispatch) => {
    dispatch({type: 'service/load/pending'});
    try {
      const res = await fetch('http://localhost:4000/carservice')
      const services = await res.json();

      dispatch({ type: 'service/load/fulfilled', payload: services });
    }catch (e) {
      dispatch({type: 'service/load/rejected', payload: e});
    }
  }
}