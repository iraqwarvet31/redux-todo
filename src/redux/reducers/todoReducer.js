const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {...state, data: action.data }
    default:
      return state;
  }
}

export default todoReducer;