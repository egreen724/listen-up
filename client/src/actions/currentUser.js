export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER"
    user: user
  }
}



// async action creators
export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }


}
