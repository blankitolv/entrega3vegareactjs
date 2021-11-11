import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting=" <-- ESTO es una prop --> en ItemListContainer "/> */}
      <ItemDetailContainer/>
    </div>
  );
}
export default App;
