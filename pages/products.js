import { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllProducts } from '../api/productData';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const getAllTheProducts = () => {
    getAllProducts(user.uid).then(setProducts);
  };

  useEffect(() => {
    getAllTheProducts();
  }, [user]);

  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.firebaseKey} productObj={product} onUpdate={getAllTheProducts} />
      ))}
    </div>
  );
}
