import { useSelector } from 'react-redux';

function Header() {

  let candidates = useSelector(state => state.candidates);
  let total = useSelector(state => state.votes.total);

  function mostVotes() {
    let largest = candidates[0];

    candidates.forEach(candidate => {
      if (candidate.votes > largest.votes) {
        largest = candidate;
      }
    });

    return largest;
  }

  return (
    <div id="votes-header">
      <p>{mostVotes().name}</p>
      <p>Total Votes {total}</p>
    </div>
  )
}

export default Header;
