import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Countries from './components/Countries';
import SearchBar from './components/SearchBar';

function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="container-fluid justify-content-center">
            <SearchBar onSearch={query => setSearchQuery(query)} />
          </div>
        </nav>
        <div className='main'>
          <div className='my-container'>
            <Countries searchQuery={searchQuery} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
