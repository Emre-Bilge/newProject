import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Success from './pages/Success'
import Orderpizza from './pages/Success'



function App() {

  const [pizzaKalınlık, setPizzaKalınlık] = useState("");
  const [pizzaBoyut, setPizzaBoyut] = useState("");
  const [pizzaMalzeme, setPizzaMalzeme] = useState([]);


  return (
    <div>
      <Route>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Orderpizza">
            <Orderpizza
              pizzaKalınlık={pizzaKalınlık}
              pizzaBoyut={pizzaBoyut}
              pizzaMalzeme={pizzaMalzeme}
            />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>

        </Switch>

      </Route>


    </div >
  )
}

export default App
