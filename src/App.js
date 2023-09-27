import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Mainpage from './Mainpage';
import New from './components/New';
import Women from './components/Women';
import Men from './components/Men'
function App() {
 
 
  return  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/men' element={<Men/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
