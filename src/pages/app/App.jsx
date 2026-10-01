
import './App.scss';
import { Link } from 'react-router';

function App() {
  return (
    <div className="App">
      <h1>oi</h1>
      <nav>
        <ul>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/contas">Contas</Link></li>
        </ul>
      </nav>
     
    </div>
  );
}

export default App;
