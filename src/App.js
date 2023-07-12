import { HashRouter as Router, Route, Routes} from "react-router-dom";
import MultiTest from "./Components/MultiTest";
import LargeForm from "./Components/LargeForm";
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
            <Route exact path="multistep" element={<MultiTest />} />
            <Route exact path="largeform" element={<LargeForm />} />
            <Route exact path="page3" element={<Page3 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;