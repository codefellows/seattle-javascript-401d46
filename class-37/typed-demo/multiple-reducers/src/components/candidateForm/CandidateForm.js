import { useSelector, useDispatch } from 'react-redux';
import { vote } from '../../store/actions';

function CandidateForm() {

  // let votes = useSelector(state => state.votes);
  let candidates = useSelector(state => state.candidates);
  let dispatch = useDispatch(); // returns the same function as store.dispatch in our tests!

  const handleVote = (candidate) => {
    let action = vote(candidate);
    dispatch(action);
  }

  return (
    <div id="candidate-form">
      {candidates.map(candidate => (
        <button onClick={() => handleVote(candidate)}>{candidate.name}</button>
      ))}
    </div>
  );
}

export default CandidateForm;
