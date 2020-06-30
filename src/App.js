import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Router>
    <Provider store={store}>
      {/* Todo lo que está fuera del switch, está disponible en todas las páginas */}
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Productos} />
          <Route exact path='/productos/nuevo' component={NuevoProducto} />
          <Route exact path='/productos/editar/:id' component={EditarProducto} />
        </Switch>
      </div>
    </Provider>
  </Router>
);

export default App;
