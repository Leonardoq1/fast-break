import './App.css';
import Corousel from './components/Corousel';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Corousel/>
      <Products/> 
      {/* <Product/> */}
      
    </div>
  );
}

export default App;
