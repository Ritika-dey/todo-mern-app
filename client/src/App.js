import Home from './components/Home';
import Vizualise from './components/Vizualise';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Todo from './components/Todo';
import '../src/app.css' 

function App() {
  return (
    <div className="App">   
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Todo} />
          <Route exact path="/viz" component={Vizualise} />
        </Switch>
    </div>
  );
}

export default App;
