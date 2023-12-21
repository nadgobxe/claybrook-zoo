import logo from "./logo.svg";
import "./App.css";
import Root from "./components/Root";
import Header from "./components/Header";

function App() {
  return (
    <>
    <div className="mx-auto bg-green-900">
    <Header></Header>
    </div>
      
      <Root></Root>
    </>
  );
}

export default App;
