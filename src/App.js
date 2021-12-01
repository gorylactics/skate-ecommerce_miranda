import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/navbar.css';
// import { Inicio } from  './components/Inicio/Inicio'
import { NavBar } from './components/navbar/navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { ProductProvider } from './context/ProductsContext';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              {/* <Inicio /> */}
              <ItemListContainer  />
            </Route>
          </Switch>
          <Switch>
            {/* <Route exact path="/categories/:categoryId"> */}
            <Route exact path="/categories/:categoryIdTxt">
              <ItemListContainer  />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/item/:id">
                <ItemDetailContainer  />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/cart">
              <Cart  />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}
export default App;