import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Layout from "./Components/Layout";
import Home from "./Components/Home";

import '../node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css';
import '@cdssnc/gcds-components-react/gcds.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact index element={<Home />} />
            <Route exact path="page1" element={<Page1 />} />
            <Route exact path="page2" element={<Page2 />} />
            <Route exact path="page3" element={<Page3 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;