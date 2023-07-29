
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Countries from './components/Countries';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="container-fluid justify-content-center">
            <form className="d-flex input-group-lg" role="search">
              <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className='my-container'>
          <Countries />
        </div>
      </header>
    </div>
  );
}

export default App;
