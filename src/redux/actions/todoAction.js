export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const getTodos = () => ({
  type: 'GET_TODOS',
})

export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  data: todos,
})