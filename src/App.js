import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting=" <-- ESTO es una prop --> en ItemListContainer "/>
      {/* <ItemDetailContainer/> */}
    </div>
  );
}
export default App;
