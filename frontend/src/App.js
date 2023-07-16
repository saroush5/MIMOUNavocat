import './App.css';
import Header from './Header';
import Address from './Address';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p className="notes">A ajouter: lien waze, lien google maps</p> */}
      <br></br>
      <p className="notes">Avocat Generaliste, specialisee dans le divorce, droit de la famille,, droit penal et expulsion.</p>
      <br></br>
      <Address className="address" />
      <Footer />
    </div>
  );
}

export default App;
