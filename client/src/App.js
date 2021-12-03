import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Userslist from './screens/Userslist';
import Addpizza from './screens/Addpizza';
import Orderslist from './screens/Orderslist';
import Pizzaslist from './screens/Pizzaslist';
import Adminscreen from './screens/Adminscreen';
import Editpizza from './screens/Editpizza';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>

        <Routes>

          <Route path="/" exact element={<Homescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />

        </Routes>

        <Routes>
          <Route path="/admin" element={<Adminscreen />}>
            <Route index element={<Userslist/>}/>
            <Route path='pizzaslist' element={<Pizzaslist/>}/>
            <Route path='addpizza' element={<Addpizza/>}/>
            <Route path='orderslist' element={<Orderslist/>}/>
            <Route path='editpizza/:pizzaid' element={<Editpizza/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
