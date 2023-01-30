import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
    <Router>
        <Route exact path="/" component={Login} />
    </Router>
    
    </>
  );
}

export default App;
