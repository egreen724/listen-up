const initialState = {
  email: "",
  password: ""
}

export default function loginFormReducer(state = initialState, action){

  switch (action.type) {

    case "UPDATE_LOGIN_FORM":
      return action.formData

      default:
        return state;
    }
}
