import { useEffect, useState } from 'react';
import './App.css';
import CartList from './components/CartList';
import ProductCard from './components/ProductCard';

function App() {
  const [pdt, setPdt] = useState([]);

  useEffect(() => {
    fetchPdtData();
  }, []);

  // Fetch all products
  const fetchPdtData = () =>
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setPdt(data))
      .catch((err) => console.error(err));

  return (
    <div className="container-fluid bg-light" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-md-8">
          <ProductCard products={pdt} />
        </div>
        <div className="col-md-4">
          <h3 className="text-primary text-center mt-4">My Cart</h3>
          <CartList />
        </div>
      </div>
    </div>
  );
}

export default App;
