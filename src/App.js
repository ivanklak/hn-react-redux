import "./App.css";
import { Route } from "react-router-dom";
import NewsPageContainer from "./components/NewsPageContainer";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>First</h1>
      </div>
      <Route path="/newspage" render={() => <NewsPageContainer />} />
    </div>
  );
}

export default App;
