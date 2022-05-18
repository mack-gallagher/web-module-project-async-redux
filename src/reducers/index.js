import {
         CLEAR_OPEN,
         clearOpen,
         GET_NEW,
         getNew,
         REMOVE_OPEN,
         removeOpen, 
         FAVORITE, 
         favorite,
         CLEAR_CHECKED,
         clearChecked,
         TOGGLE_FAVORITE,
         toggleFavorite,
         TOGGLE_CHECKED,
         toggleChecked,
       } from '../actions';

/*

REMEMBER: THE DATA WE GET FROM THE API WILL HAVE THIS SHAPE:

{
  "activity" : "Learn about a distributed version control system such as Git",
  "type" : "education",
  "participants" : 1,
  "price" : 0,
  "link" : "https://en.wikipedia.org/wiki/Distributed_version_control",
  "key" : "9303608",
  "accessibility" : 0
}


*/


const initialState = {
  currentTodos: [
                  {
                    "activity" : "Learn about a distributed version control system such as Git",
                    "type" : "education",
                    "participants" : 1,
                    "price" : 0,
                    "link" : "https://en.wikipedia.org/wiki/Distributed_version_control",
                    "key" : "9303608",
                    "accessibility" : 0
                  },
                  {
                    "activity": "Create a personal website",
                    "type": "recreational",
                    "participants": 1,
                    "price": 0.1,
                    "link": "",
                    "key": "3141417",
                    "accessibility": 0.12
                  },
                  {
                    "activity": "Play a game of Monopoly",
                    "type": "social",
                    "participants": 4,
                    "price": 0.2,
                    "link": "",
                    "key": "1408058",
                    "accessibility": 0.3
                  },
                ],
  savedTodos: [
              ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_OPEN:
      return { ...state, currentTodos: [], };
    case GET_NEW:
      return { ...state, currentTodos: state.currentTodos.concat(action.payload) };
    case REMOVE_OPEN:
      return { ...state, currentTodos: state.currentTodos.filter(x.id !== action.payload) };
    case FAVORITE:
      let focusTodo = state.currentTodos.filter(x => x.id === action.payload)[0];
      return {
               ...state,
               savedTodos: state.savedTodos.concat(focusTodo),
             };
    case CLEAR_CHECKED:
      return {
               ...state,
               savedTodos: state.savedTodos.filter(x => x.checked !== true),
             }
    case TOGGLE_FAVORITE:
      focusTodo = state.savedTodos.filter(x => x.id === action.payload)[0];
      return {
               ...state, 
               savedTodos:
                 [
                   ...state.savedTodos,
                   {
                     ...focusTodo,
                     favorited: !focusTodo.favorited, 
                   },
                 ],
             };
    case TOGGLE_CHECKED:
       focusTodo = state.savedTodos.filter(x => x.id === action.paylod)[0];
       return {
                ...state,
                savedTodos:
                  [
                    ...state.savedTodos,
                    {
                      ...focusTodo,
                      checked: !focusTodo.checked,
                    },
                  ],
              };
    default:
      return state;
  }
}

export default reducer;
