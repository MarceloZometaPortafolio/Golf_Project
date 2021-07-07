import './App.css';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();

    function navigate_to_track() {
        console.info("Navigating to Track your progress");

        history.push("/stroke-count");
    }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to your Golf App!</h2>
        <br/>
        <button onClick={navigate_to_track}>Track your strokes!</button>
      </header>
    </div>
  );
}

export default Home;
