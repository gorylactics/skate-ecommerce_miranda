import './App.css';
import './components/navbar/navBar.css'
import { NavBar } from './components/navbar/navBar.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
      {/* al parecer se debe trabajar pensando en que es la estructura base de index.html */}
      </body>
    </div>
  );
}

export default App;
