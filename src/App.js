import Home from './Component/Home/Home';
import NavBar from './Component/NavBar/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Component/Search/search';
import ApartmentDetails from './Component/Apartment/ApartmentDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/search"><Search /></Route>
            <Route path="/apartments/:id"><ApartmentDetails /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
