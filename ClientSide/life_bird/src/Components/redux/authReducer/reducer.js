import {
  GET_ALL_SIGNUP_REQUEST,
  GET_ALL_SIGNUP_SUCCESS,
  GET_ALL_SIGNUP_FAILURE,
  GET_ALL_DISEASE_REQUEST,
  GET_ALL_DISEASE_SUCCESS,
  GET_ALL_DISEASE_FAILURE,
} from './actiontype';

const initialState = {
  data: [],
  error: '',
  loading: false,
  searchData: [],
  requestedDisease: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_ALL_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    case GET_ALL_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      };
    case GET_ALL_DISEASE_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_ALL_DISEASE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        data: action.payload,
      };
    case GET_ALL_DISEASE_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};

export default authReducer;
