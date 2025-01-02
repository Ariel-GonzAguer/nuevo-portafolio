// enrutado- wouter
import { Route, Switch } from "wouter";

// componentes
import Home from "./components/Home/Home/Home"

function App() {


  return (

    <>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>


  )
}

export default App
