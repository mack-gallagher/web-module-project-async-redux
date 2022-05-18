export const CLEAR_OPEN = "CLEAR_OPEN";
export const GET_NEW = "GET_NEW";
export const REMOVE_OPEN = "REMOVE_OPEN";
export const FAVORITE = "FAVORITE";
export const CLEAR_CHECKED = "CLEAR_CHECKED";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export const clearOpen = () => {
  return {
           type: CLEAR_OPEN
         }
}

export const getNew = (item) => { /* this should not be happening here? */
  return {
           type: GET_NEW,
           payload: item,
         }
}

export const removeOpen = (id) => {
  return {
           type: REMOVE_OPEN,
           payload: id,
         }
}

export const favorite = (id) => {
  return {
           type: FAVORITE,
           payload: id,
         }
}

export const clearChecked = () => {
  return {
           type: CLEAR_CHECKED,
         };
}

export const toggleFavorite = (id) => {
  return {
           type: TOGGLE_FAVORITE,
           payload: id,
         };
}

export const toggleChecked = (id) => {
  return {
           type: TOGGLE_CHECKED,
           payload: id,
         };
}

