import './App.css';
import Teams from './pages/Teams';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Teams}/>
        </Switch>
      </div>
    </Router>
  );
};


export default App;
