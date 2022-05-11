// log the action in the console
const logger = (store) => (next) => (action) => {
  console.log("__ACTION__", action);
  return next(action); // either another middleware if provided, or the reducer if no other middleware
}

export default logger;
