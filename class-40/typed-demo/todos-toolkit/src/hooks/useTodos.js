import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/todos';

function useTodos() {

  let todoList = useSelector(state => state.todos.list);
  let dispatch = useDispatch();

  let addToList = (todo) => {
    dispatch(addTodo(todo));
  }

  return {
    todoList,
    addToList,
  }
}

export default useTodos;
