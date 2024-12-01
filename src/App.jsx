import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderPizza from "./components/OrderPizza";
import SuccessPage from "./components/SuccessPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header showLinks={false} />
          <HomePage />
        </Route>
        <Route exact path="/orderpizza">
          <Header showLinks={true} />
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Header showLinks={false} />
          <SuccessPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
