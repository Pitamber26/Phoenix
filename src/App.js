import About1 from "./components/About1.js"
import About2 from "./components/About2.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>About</h1>
      <div className="sides">
      <About1 />
      <About2 />
      </div>
    </div>
  );
}

export default App;
