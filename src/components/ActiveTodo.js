import React from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';

import {
         REMOVE_OPEN,
         removeOpen,
         FAVORITE,
         favorite
       } from '../actions';

const mapStateToProps = (state) => {
  return {};
}

function ActiveTodo(props) {
  const { dispatch } = props;

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
               className="remove"
               onClick={() => dispatch(removeOpen(props.id))}
             >
               Remove
             </button>
             <button 
               className="favorite"
               onClick={() => dispatch(favorite(props.id))}
             >
               Save
             </button>
           </div>
         );
}

export default connect(mapStateToProps)(ActiveTodo);
