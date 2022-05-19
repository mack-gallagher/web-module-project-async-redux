import React from 'react';

import { connect } from 'react-redux';

import {
         TOGGLE_FAVORITE,
         toggleFavorite,
         TOGGLE_CHECKED,
         toggleChecked
       } from '../actions';

function SavedTodo(props) {

  const { dispatch } = props;
  console.log(props.favorited);

  return (
           <div className="saved-todo">
             <h4>Activity: { props.activity }</h4>
             <p>Participants: { props.participants }</p>
             <p>Price: { props.price }</p>
             <span>
               <p>Link: </p>
               { props.link?<a href={ props.link }>{ props.link }</a>:<p>None</p> }
             </span>
             <p>Key: { props.id }</p>
             <p>Accessibility rating: { props.accessibility }</p>
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

export default connect(null)(SavedTodo);
