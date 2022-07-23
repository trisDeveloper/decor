import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Social />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route path="/about" component={About} />                          */}
        {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
