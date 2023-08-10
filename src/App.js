import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="header">
      <img
        className="logo"
        src={require("./img/teaminer_logo.png")}
        alt="Logo"
      />
      <div className="App">
        <Header />
      </div>
    </div>
  );
}

export default App;
