import { useState } from "react";
import './nav.scss';

function Nav () {

  let [topics, setTopics] = useState(['Topic 1', 'Topic 2', 'Topic 3']);

  return (
    <nav>
      <ul>
        {topics.map((topic, id) => (
          <li key={`nav${id}`}>{topic}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;
