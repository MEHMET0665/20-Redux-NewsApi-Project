import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from "../actions";

const reducer = (state = {}, action) => {
  switch (action.type){
    case SELECT_CHANNEL:
      return {...state,channel:action.channel};
      case RECEIVE_POSTS:
        return {...state,json:action.json};
        default:
          return state;}}

;
export default reducer;
