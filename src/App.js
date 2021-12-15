import CartContextProvider from './context/CartContext';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Error from './components/Error/Error';
import HeroIndex from './components/HeroIndex/HeroIndex.jsx';

function App() {
  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Switch>
                <Route exact path='/' component={ HeroIndex } />
                <Route exact path='/productos' component={ ItemListContainer } />
                <Route exact path='/categoria/:catId' component={ ItemListContainer }/>
                <Route exact path='/item/:itemId' component={ ItemDetailContainer }/>          
                <Route exact path='/cart' component={ Cart }/>
                <Route exact path='/Error' component={ Error }/>
              </Switch>                  
          </BrowserRouter>
        </CartContextProvider>
    </div>    
  );
}
export default App;
