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

function ActivePlan(props) {
  const { dispatch } = props;

  return (
           <div className="saved-todo">
             <div className="active-info">
               <h4>{ props.activity+'!' }</h4>
               <span>
                 Link:
                 { ' ' }
                 { props.link?<a href={ props.link }>{ props.link }</a>:'None' }
               </span>
             </div>
             <div className="active-buttons">
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
           </div>
         );
}

export default connect(mapStateToProps)(ActivePlan);
