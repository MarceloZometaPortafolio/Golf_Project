import './App.css';

function Home() {

  function navigate_to_track() {
    alert("Navigating to Track your progress")
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
