import React from 'react';

function ActiveTodo(props) {
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
             <div className="remove">
               Remove
             </div>
             <div className="favorite">
               Favorite
             </div>
           </div>
         );
}

export default ActiveTodo;
