// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';

function App() {
  return (
    <div className="App">
      <Header name="React-Games"/>
      <GameList />
    </div>
  );
}

export default App;
