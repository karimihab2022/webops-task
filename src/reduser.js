import {
    CHANGE_SEARCHFIELD,
    REQUEST_PHOTOS_PENDING,
    REQUEST_PHOTOS_SUCCESS,
    REQUEST_PHOTOS_FAILED
   } from './constants';
  
  const initialStateSearch = {
    searchField: ''
  }
  
  export const searchRobots = (state=initialStateSearch, action={}) => {
    switch (action.type) {
      case CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
      default:
        return state
    }
  }
  
  const initialStatephotos = {
    photos: [],
    isPending: false ,
    error:""
  }
  
  export const requestphotos = (state=initialStatephotos, action={}) => {

    switch (action.type) {
      case REQUEST_PHOTOS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_PHOTOS_SUCCESS:
        return Object.assign({}, state, {photos: action.payload, isPending: false})
      case REQUEST_PHOTOS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }