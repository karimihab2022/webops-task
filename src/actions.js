import axios from 'axios'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_PHOTOS_PENDING,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestphotos = () => {
  return (dispatch) => {
  
    dispatch({ type: REQUEST_PHOTOS_PENDING })
    axios.get("https://jsonplaceholder.typicode.com/photos?_page=1&_limit=9")
      .then(response =>{ const photos = response.data 
        dispatch({ type: REQUEST_PHOTOS_SUCCESS, payload: response.data  })})
      .catch(error => dispatch({ type: REQUEST_PHOTOS_FAILED, payload: error }))
  } 
}
