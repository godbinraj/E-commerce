import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import shopping from "../product/shopping.css";
import axios from 'axios';

function Shopping() {
  const [products, setProducts] = useState([]);
  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        setProducts(response.data);  
      } catch (error) {
        console.log("Something Went Wrong", error);
      }
    };

    fetchData();
  }, []);
  return (
   
    <div className="shop">
    <div className="card-container mt-5">
      {products.map(x => {
        if (x.id > 1) {
          return (
            <div className="card" key={x.id}>
              <div className="card-body">
                <img src={x.image} alt={x.title} style={{ width: '100px' }} />
                <h2 className="title mt-3">{x.title}</h2>
                <p className="price">${x.price}</p>
              </div>
            </div>
          );
        }
        return null;  
      })}
    </div>
  </div>
);

}

export default Shopping
