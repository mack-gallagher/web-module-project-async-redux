import React from 'react';

import { connect } from 'react-redux';

function SavedTodo(props) {
  return (
           <div className="saved-todo">
             <h4>Activity: { props.activity }</h4>
             <p>Participants: { props.participants }</p>
             <p>Price: { props.price }</p>
             <span>
               <p>Link: </p>
               { props.link?<a href={ props.link }>{ props.link }</a>:<p>None</p> }
             </span>
             <p>Key: { props.key }</p>
             <p>Accessibility rating: { props.accessibility }</p>
             <div className={ "star" + props.favorited?" favorited":"" }>
               x
             </div>
             <div className={ "checkbox" + props.checked?" checked":"" }>
               o
             </div>
           </div>
         )
}

export default SavedTodo;
