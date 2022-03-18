// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GameList from './components/GameList';
import Game from './components/Game';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <BrowserRouter>
      <Header name="Checkpoint's Wild games" />
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
