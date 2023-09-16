import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Mainpage from './Mainpage';
import New from './components/New';

function App() {
 
 
  return  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/new' element={<New/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;
