import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer getting=' Todos los productos'/>
            </Route>
            <Route exact path='/category/:categoryID'>
              <ItemListContainer/>
            </Route>
            <Route exact path='/item/:id' component={ItemDetailContainer} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
