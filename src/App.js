import "./App.css";
import Sidenav  from "./components/Sidenav/Sidenav";
import routes from "./routes.js";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Sidenav routes={routes} />
    </HashRouter>
  );
}
