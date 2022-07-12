import React from 'react';
import './App.css';

import Redux from 'redux';
import { connect } from 'react-redux';

import ActivePlan from './ActivePlan.js';
import SavedPlan from './SavedPlan.js';
import reducer from '../reducers';

import {
         getNew,
         CLEAR_OPEN,
         clearOpen,
         CLEAR_CHECKED,
         clearChecked,
       } from '../actions';

const mapStateToProps = (state) => {
  return {
           currentPlans: state.currentPlans,
           savedPlans: state.savedPlans,
         };
}

function App(props) {

  const { currentPlans, savedPlans, dispatch } = props;

  return (
    <div className="App">
      <section className="main-body">
        <h1>Generate a boredom-busting plan!</h1>
        <div className="active-todos-container">
          {
             currentPlans.map((x,idx) => {
               return (
                 <ActivePlan
                   activity={x.activity}
                   type={x.type}
                   participants={x.participants}
                   price={x.price}
                   link={x.link}
                   id={x.key}
                   key={idx}
                   accessibility={x.accessibility}
                 />
               );
             })
          }
        </div>
        <button
          className="generator-button"
          onClick={() => dispatch(getNew())} 
        >
          Generate Plan
        </button>
        <button
          className="clear-button"
          onClick={() => dispatch(clearOpen()) }
        >
          Clear Active Plans
        </button>
      </section>
      <section className="favorites-sidebar">
        <h3>Saved</h3>
        <div className="favorites-container">
          {
            savedPlans.map((x,idx) => {
              return <SavedPlan
                       activity={x.activity}
                       type={x.type}
                       participants={x.participants}
                       price={x.price}
                       link={x.link}
                       id={x.key}
                       key={idx}
                       favorited={x.favorited}
                       checked={x.checked}
                       accessibility={x.accessibility}
                     />
            })
          }
          <button
            onClick={() => dispatch(clearChecked())}
          >
            Clear Checked Plans
          </button>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStateToProps)(App);
