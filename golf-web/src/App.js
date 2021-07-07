import './App.css';
import Home from './Home.js';
import StrokeCount from './StrokeCount';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/stroke-count" exact component={StrokeCount}/>
        <Route render={() => <h1>404: Page not found</h1>}/>
      </Switch>
    </Router>
  );
  
}

export default App;
