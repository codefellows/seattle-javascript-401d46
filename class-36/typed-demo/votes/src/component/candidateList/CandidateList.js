import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { incrementCount, decrementCount, reset } from '../../store/votes';

function CandidateList({ totalVotes, candidates, incrementCount, decrementCount, reset }) {

  console.log(totalVotes);
  console.log(candidates);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}} id="list">
      {candidates.map(candidate => (
        <Card sx={{ margin: "10px" }} raised key={candidate.id}>
          <CardContent>
            <Typography gutterBottom variant="h3">{candidate.name}</Typography>
            <Typography variant="body2" color="text.secondary">Votes: {candidate.votes}</Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => incrementCount(candidate)}>Vote for {candidate.name}</Button>
            <Button onClick={() => decrementCount(candidate)}>Un-Vote for {candidate.name}</Button>
          </CardActions>
        </Card>
      ))}
      <IconButton onClick={reset}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}

const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates
  }
}

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  reset
}

// Higher order component.
export default connect(mapStateToProps, mapDispatchToProps)(CandidateList);
