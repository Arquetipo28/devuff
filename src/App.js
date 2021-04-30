import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path='/' component={HomePage} />
    </Router>
  );
}

export default App;
