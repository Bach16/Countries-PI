import './App.css';
import {Route} from "react-router-dom"
import LandingPage from "./landing/LandingPage"
import Home from "./home/Home"
import Detail from "./details/Detail"
import Create from "./form/Create"


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path='/home' component={Home}/>
      <Route path='/countrie/:id' component={Detail}/>
      <Route path="/create" component={Create}/>      
    </div>
  );
}

export default App;
