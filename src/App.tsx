import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import UnsurePage from './pages/UnsurePage';

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
        <Route
          path="/productList"
          Component={ProductListPage}
        />
        <Route
          path="/productDetail"
          Component={ProductDetailPage}
        />
        <Route
          path="/unsure"
          Component={UnsurePage}
        />
      </Routes>
    </Router>
  )
}

export default App;
