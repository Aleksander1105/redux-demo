import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import CommentsFormContainer from './CommentsFormContainer';
import DevTools from './DevTools';


const App = () => {
  return (
    <div className="App">
      <CommentsFormContainer/>
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
