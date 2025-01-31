import {
         CLEAR_OPEN,
         clearOpen,
         GET_NEW_START,
         GET_NEW_SUCCESS,
         GET_NEW_FAILURE,
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
  currentPlans: [
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
  savedPlans: [
              ],
  areGetting: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_OPEN:
      return { ...state, currentPlans: [], };
    case GET_NEW_START:
      return { 
               ...state,
               error: '',
               areGetting: true,
             };
    case GET_NEW_SUCCESS:
      return {
               ...state,
               error: '',
               areGetting: false,
               currentPlans: [...state.currentPlans, action.payload],
             }
    case REMOVE_OPEN:
      return { ...state, currentPlans: state.currentPlans.filter(x => x.key !== action.payload) };
    case FAVORITE:
      let focusPlan = {
                        ...state.currentPlans.filter(x => x.key === action.payload)[0],
                        favorited: false,
                        checked: false,
                      }
      return {
               ...state,
               savedPlans: state.savedPlans.concat(focusPlan),
             };
    case CLEAR_CHECKED:
      return {
               ...state,
               savedPlans: state.savedPlans.filter(x => x.checked !== true),
             }
    case TOGGLE_FAVORITE:
      let favoritePlan = state.savedPlans.filter(x => x.key === action.payload)[0];
      return {
               ...state, 
               savedPlans:
                 [
                   ...state.savedPlans.filter(x => x.key !== action.payload),
                   {
                     ...favoritePlan,
                     favorited: !favoritePlan.favorited, 
                   },
                 ],
             };
    case TOGGLE_CHECKED:
       let checkPlan = state.savedPlans.filter(x => x.key === action.payload)[0];
       return {
                ...state,
                savedPlans:
                  [
                    ...state.savedPlans.filter(x => x.key !== action.payload),
                    {
                      ...checkPlan,
                      checked: !checkPlan.checked,
                    },
                  ],
              };
    default:
      return state;
  }
}

export default reducer;
