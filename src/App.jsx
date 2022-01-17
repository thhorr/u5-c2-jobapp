
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Route,Routes} from 'react-router-dom';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
import { Signout } from './components/Signout';
import { Todo } from './components/Todo';
import { Job } from './components/Job';
import { useState } from 'react';
import { JobSelect } from './JobSelect';
function App() {
  const [show,setShow] = useState(true);
  return (
    
    <div className="App">
     
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/todo" element={ <PrivateRoute><Todo/></PrivateRoute>}>
     </Route>
     <Route path="/todo/:userid" element={<PrivateRoute><JobSelect/></PrivateRoute>}>
     </Route>
     <Route path="/job" element={ <PrivateRoute><Job/></PrivateRoute>}>
     </Route>
     <Route path="/login" element={<Login/>}>
     </Route>
     <Route path="/signout" element={<Signout/>}>
     </Route>
     <Route path="*" element={<h1>404 Page not found</h1>}>
     </Route>
     </Routes>
    </div>
  );
}

export default App;
