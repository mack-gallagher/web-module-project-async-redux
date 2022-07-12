import React from 'react';

import { connect } from 'react-redux';

import {
         TOGGLE_FAVORITE,
         toggleFavorite,
         TOGGLE_CHECKED,
         toggleChecked
       } from '../actions';

function SavedPlan(props) {

  const { dispatch } = props;
  console.log(props.favorited);

  return (
           <div className="saved-todo">
             <h4>{ props.activity }</h4>
             <span>
               <p>Link: </p>
               { props.link?<a href={ props.link }>{ props.link }</a>:<p>None</p> }
             </span>
             <button 
               className={ props.favorited?"favorited":"" }
               onClick={() => dispatch(toggleFavorite(props.id))}
             >
               Favorite
             </button>
             <button 
               className={ props.checked?"checked":"" }
               onClick={() => dispatch(toggleChecked(props.id))}
             >
               Check
             </button>
           </div>
         )
}

export default connect(null)(SavedPlan);
