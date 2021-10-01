// Fichero src/components/App.js
import Proptypes from 'prop-types';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h2>Este título aparece siempre</h2>

      <Route path='/contacto'>
        <h2>
          Este título solo aparece cuando la usuaria entra en la página de
          contacto
        </h2>
      </Route>

      <nav>
        <ul>
          <li>
            <a href='/#/'>Ir al inicio</a>
          </li>
          <li>
            <a href='/#/contacto'>Ir a contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
