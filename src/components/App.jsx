import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTodos } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch])

  const todos = useSelector((state) => state.data);
  console.log(todos);
  return (
    <div>
      <h1>WELCOME TO YOUR TODO APP!</h1>
      <input 
        placeholder="add your todo"
        value=""
      >

      </input>
    </div>
  )
}

export default App;