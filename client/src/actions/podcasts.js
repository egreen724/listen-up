export const AddToList = podcast => {
  return {
    type: "ADD_TO_LIST",
    podcast: podcast
  }
}

export const AddToCurrentlyListening = podcast => {
  return {
    type: "ADD_TO_CURRENTLY_LISTENING",
    podcast: podcast
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
