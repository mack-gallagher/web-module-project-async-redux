import React from 'react';
import './App.css';

import Redux from 'redux';
import { connect } from 'react-redux';

import ActiveTodo from './ActiveTodo.js';
import reducer from '../reducers';

import {
         getNew,
         CLEAR_OPEN,
         clearOpen,
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
        <h1>My Saved Todos</h1>
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
        <h3>Favorites</h3>
      </section>
    </div>
  );
}

export default connect(mapStateToProps)(App);
