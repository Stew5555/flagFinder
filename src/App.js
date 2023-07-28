
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


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
        <div className='container'>
          <div className="card" style={{width: '18rem'}}>
            <img src="./public/flags/ad.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
