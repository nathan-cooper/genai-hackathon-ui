import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          Component={LandingPage}
        />
        <Route
          path="/chat"
          Component={ChatPage}
        />
      </Routes>
    </Router>
  )
}

export default App;
