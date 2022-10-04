import "./styles.css";

import ApexCharts from "./Components/Chart/Chart";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="flex1">
        <Sidebar />
      </div>
      <div className="flex2">
        <Header />
        <div id="charts">
          <ApexCharts />
        </div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
