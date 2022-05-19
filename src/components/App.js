import React from 'react';
import './App.css';

import Redux from 'redux';
import { connect } from 'react-redux';

import ActiveTodo from './ActiveTodo.js';
import SavedTodo from './SavedTodo.js';
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
           currentTodos: state.currentTodos,
           savedTodos: state.savedTodos,
         };
}

function App(props) {

  const { currentTodos, savedTodos, dispatch } = props;

  return (
    <div className="App">
      <section className="main-body">
        <h1>My Todos</h1>
        <div className="active-todos-container">
          {
             currentTodos.map((x,idx) => {
               return (
                 <ActiveTodo
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
          Generate Todo
        </button>
        <button
          className="clear-button"
          onClick={() => dispatch(clearOpen()) }
        >
          Clear Active Todos
        </button>
      </section>
      <section className="favorites-sidebar">
        <h3>Saved</h3>
        <div className="favorites-container">
          {
            savedTodos.map((x,idx) => {
              return <SavedTodo
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
            Clear Checked Todos
          </button>
        </div>
      </section>
    </div>
  );
}

export default connect(mapStateToProps)(App);
