import './App.css';
import PostsList from "./features/PostsList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>

        <PostsList />
      </header>
    </div>
  );
}

export default App;
