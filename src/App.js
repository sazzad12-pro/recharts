import "./App.css";
import LineCharts from "./component/LineChart/LineCharts";
import Navbar from "./component/navbar/Navbar";
import SplitChart from "./component/SplitChart/SplitChart";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LineCharts></LineCharts>
      <SplitChart></SplitChart>
    </div>
  );
}

export default App;
