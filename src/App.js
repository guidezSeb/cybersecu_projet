import logo from './Logos/logo_droit.png';
import './App.css';
//import Info from './Informations.js';
import MyClock from './Clock.js';
import Auth from './authentification.js'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        <Auth/>
      </header>
      <footer>
      <MyClock/>
      </footer>
    </div>
  );
}

export default App;
