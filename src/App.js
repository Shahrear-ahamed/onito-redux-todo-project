import "./App.css";
import ListOfReceipt from "./ListOfReceipt";
import Receipt from "./Receipt";

function App() {
  return (
    <div className="home-div">
      <Receipt />
      <ListOfReceipt />
    </div>
  );
}

export default App;
