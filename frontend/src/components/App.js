import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './nav';
import Home from './Home';
import AddUser from './AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter  rounded="true.toString()">
<NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/view/:id" element={<h3> This is view page </h3>}/>
  <Route path="/update/:id" element={<h3> This is update page </h3>}/>
  <Route path="/delete/:id" element={<h3> This is delete page </h3>}/>
  <Route path="/add" element={<AddUser/>}/>
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
