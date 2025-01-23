import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UseCallbackExample from './components/UseCallbackExample';
import UseMemoExample from './components/UseMemoExample';
import UseReducerExample from './components/UseReducerExample';
import UseRefExample from './components/UseRefExample';
import UseContextExample from './components/UseContextExample';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <h1>React Hooks Examples</h1>
          <ul>
            <li><Link to="/callback">useCallback</Link></li>
            <li><Link to="/memo">useMemo</Link></li>
            <li><Link to="/reducer">useReducer</Link></li>
            <li><Link to="/ref">useRef</Link></li>
            <li><Link to="/context">useContext</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/callback" element={<UseCallbackExample />} />
          <Route path="/memo" element={<UseMemoExample />} />
          <Route path="/reducer" element={<UseReducerExample />} />
          <Route path="/ref" element={<UseRefExample />} />
          <Route path="/context" element={<UseContextExample />} />
          <Route path="/" element={<h2>Select a hook example from the menu</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
