export const vote = (candidate) => {

  return {
    type: 'INCREMENT',
    payload: candidate,
  }
}
