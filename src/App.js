import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/AboutUs';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


class App extends React.Component{
  state = {
    item:0
  }

  addItem = () => {
    this.setState({
      item:this.state.item +1
    })
  }


render(){
  return (
    <div className="App"> 
    <BrowserRouter>

      <Navbar item={this.state.item}/>
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/aboutus" component={About}/>
        <Route path="/shop" component={() => <Shop add={this.addItem}/>}/>
        <Shop add={this.addItem}/>
      </Switch>

    </BrowserRouter>  
    </div>
  );
}
}

export default App;
