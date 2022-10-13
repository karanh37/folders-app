import * as React from 'react';
import './App.css';
import AppBarPanel from './components/AppBar.component'
import AppRouter from './routers/AppRouter';

function App() {
  return (
    <div className="App">
        <AppBarPanel />
        <AppRouter />
    </div>
  );
}

export default App;
