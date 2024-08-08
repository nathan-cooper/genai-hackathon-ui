import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import UnsurePage from './pages/UnsurePage';
import LoanListPage from './pages/LoanListPage';
import FormPage from './pages/FormPage';
import DecisionPage from './pages/DecisionPage';
import ErrorPage from './pages/ErrorPage';

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
          path="/loanList"
          Component={LoanListPage}
        />
        <Route
          path="/productDetail"
          Component={ProductDetailPage}
        />
        <Route
          path="/unsure"
          Component={UnsurePage}
        />
        <Route
          path="/form"
          Component={FormPage}
        />
        <Route
          path="/status"
          Component={DecisionPage}
        />
        <Route
          path="/techdiff"
          Component={ErrorPage}
        />
      </Routes>
    </Router>
  )
}

export default App;
