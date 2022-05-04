import { useContext, useState } from 'react';
import { SettingsContext } from '../../context/settings';

function Todo() {

  const settings = useContext(SettingsContext);

  const [list, setList] = useState([
    { difficulty: 4, completed: false, assignee: 'Jacob', description: 'test todo' },
    { difficulty: 4, completed: true, assignee: 'Jacob', description: 'test todo' },
  ]);


  // filter any list items based on some requirement criterai
  const filterList = () => {
    if (settings.hideCompleted) {
      return list.filter(item => item.completed === false);
    }

    return list;
  }

  return (
    <div id="todo-container">

    {/* should render all or filter by hideCompleted */}
    {filterList().map(item => (
      <div>
        <p>{item.assignee}</p>
        <p>{item.description}</p>
        <p>{item.difficulty}</p>
        {/* React requires value HTML within elements, Booleans are not accepted */}
        <p>{`${item.completed}`}</p>
      </div>
    ))}

    </div>
  )

}

export default Todo;
