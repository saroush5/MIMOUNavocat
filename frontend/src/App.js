import './App.css';
import Header from './Header';
import Address from './Address';
import Footer from './Footer';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* <p className="notes">A ajouter: lien waze, lien google maps</p> */}
      <div className="notes">
        <Menu />
        <p>Avocat Generaliste, dans le divorce, droit de la famille,, droit penal et expulsion.</p>
        <Address className="address" />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
