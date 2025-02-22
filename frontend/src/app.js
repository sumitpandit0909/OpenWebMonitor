import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboad';
import AddNewPage from './components/AddNewPage';
import ChangeHistory from './components/ChangeHistory';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/add" component={AddNewPage} />
          <Route path="/history" component={ChangeHistory} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;