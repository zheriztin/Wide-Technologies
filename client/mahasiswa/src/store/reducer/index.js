import {SET_DATA, SET_ERROR, SET_DELETE_DATA, SET_ADD_DATA, SET_DATA_BY_ID, SET_EDIT_DATA} from "../actionType"

const initialState = {
  data: [],
  error: null,
  deleteData: [],
  addData: [],
  dataById: [],
  editData: []
}

function dataReducer (state = initialState, action) {
  const {type, payload} = action
  if (type === SET_DATA) {
    return {...state, data: payload}
  } else if (type === SET_ERROR) {
    return {...state, error: payload}
  } else if (type === SET_DELETE_DATA) {
    return {...state, error: payload}
  } else if (type === SET_ADD_DATA) {
    return {...state, error: payload}
  } else if (type === SET_EDIT_DATA) {
    return {...state, error: payload}
  } else if (type === SET_DATA_BY_ID) {
    return {...state, error: payload}
  }
  return state
}

export default dataReducer