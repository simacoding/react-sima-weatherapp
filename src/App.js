import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Munich" />
        <footer>
          This project was coded by Simone Ma{" "}
          <a
            href="https://github.com/simacoding/react-sima-weatherapp"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
