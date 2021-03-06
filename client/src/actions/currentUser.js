export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user: user
  }
}

// async action creators
export const login = credentials => {

  return dispatch => {
    return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then( user => {

      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    }
    )
  }
}

  export const getCurrentUser = () => {

    return dispatch => {
      return fetch('http://localhost:3000/api/get_current_user', {
        credentials: "include",
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(r => r.json())
      .then( user => {

        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
        }
      }
      )
    }

  }
