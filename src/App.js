import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flight" element={<List/>}/>
        {/* <Route path="/hotels/:id" element={<Hotel/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;