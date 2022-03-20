// import logo from './logo.svg';
import './styles/App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Header siteName="Checkpoint's Wild games" />
        <Routes>
          <Route path="/" element={<GameList />} /> 
          <Route path="/games/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
