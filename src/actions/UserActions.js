import { database } from '../Firebase'
export const FETCH_USERS = 'fetch_users'

export function getUsers () {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: FETCH_USERS,
        payload: snapshot.val()
      })
    })
  }
}

export function saveUser(user) {
  return dispatch => database.push(user)
} 

export function deleteUser(id) {
  return dispatch => database.child(id).remove()
}
