import CartContextProvider from './context/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Ejemplo2 from './components/Ejemplo2/Ejemplo2';
// import Ejemplo from './components/Ejemplo/Ejemplo';

function App() {
  return (
    <div className="App">
        {/* <Ejemplo/>  EJEMPLO DE LA CLASE */}
        {/* <Ejemplo2/> */}
        {/* CartContextProvider es un componente que llama al ContextProvider real */}
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Switch>
                <Route exact path='/' component={ ItemListContainer }/>
                <Route exact path='/categoria/:catId' component={ ItemListContainer }/>
                <Route exact path='/item/:itemId' component={ ItemDetailContainer }/>          
                <Route exact path='/cart' component={ Cart }/>
              </Switch>
          </BrowserRouter>
        </CartContextProvider>
    </div>    
  );
}
export default App;
