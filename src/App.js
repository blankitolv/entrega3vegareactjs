import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ejemplo2 from './components/Ejemplo2/Ejemplo2';
// import Ejemplo from './components/Ejemplo/Ejemplo';

function App() {
  return (
    <div className="App">
        {/* <Ejemplo/>  EJEMPLO DE LA CLASE*/}
        {/* <Ejemplo2/> */}
        <BrowserRouter>
          <NavBar/>
            <Switch>
              <Route exact path='/' component={ ItemListContainer }/>
              <Route exact path='/categoria/:catId' component={ ItemListContainer }/>
              <Route exact path='/item/:itemId' component={ ItemDetailContainer }/>          
              <Route exact path='/cart' component={ Cart }/>
            </Switch>
        </BrowserRouter>
    </div>    
  );
}
export default App;
