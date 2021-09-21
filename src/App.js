import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Hero />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          {/* <Route>404 Not found</Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
