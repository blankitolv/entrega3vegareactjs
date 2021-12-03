import CartContextProvider from './context/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className="App">
        {/* CartContextProvider es un componente que llama al ContextProvider real */}
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Container className="
              vw-100
              min-vh-100>
              "
              >
                <Container className="
                d-flex
                w-75
                align-items-center                
                justify-content-start
                "
                >
                  <Switch>
                    <Route exact path='/' component={ ItemListContainer }/>
                    <Route exact path='/categoria/:catId' component={ ItemListContainer }/>
                    <Route exact path='/item/:itemId' component={ ItemDetailContainer }/>          
                    <Route exact path='/cart' component={ Cart }/>
                  </Switch>                  
                </Container>
              </Container>

          </BrowserRouter>
        </CartContextProvider>
    </div>    
  );
}
export default App;
