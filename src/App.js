import "./App.css";
import { Route } from "react-router-dom";
import StoriesContainer from "./components/StoriesContainer";
import NewsContainer from "./components/NewsContainer";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Hacker News</h1>
      </div>
      <Route path="/storiespage" render={() => <StoriesContainer />} />
      <Route path="/news/:id?" render={() => <NewsContainer />} />
    </div>
  );
}

export default App;
