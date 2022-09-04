import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartList from './components/CartList';
import ProductCard from './components/ProductCard';
import { fetchProducts } from './store/product.slice';

function App() {
  const dispatch = useDispatch();
  const pdt = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
