import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

























// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, Link } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<FoodStore />} />
//       <Route path="/daily-details" element={<DailyDetails />} />
//     </Routes>
//   </Router>
// );

// function FoodStore() {
//   const location = useLocation();
  
//   // Initial list of products (with images)
//   const initialProducts = [
//     {
//       id: '1',
//       name: 'Sandwich',
//       price: 100,
//       profit: 0,
//       loss: 10,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&s', // Image URL
//     },
//     {
//       id: '2',
//       name: 'Burger',
//       price: 150,
//       profit: 30,
//       loss: 0,
//       image: 'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg', // Image URL
//     },
//     {
//       id: '3',
//       name: 'Dosa',
//       price: 200,
//       profit: 0,
//       loss: 5,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ycQho5biF0TZLGOuDtp2jStnUNAqqzlXhg&s', // Image URL
//     },
//     {
//       id: '4',
//       name: 'Pizza',
//       price: 400,
//       profit: 10,
//       loss: 0,
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQIigRH8QkERhJyf1FpB3Djm7-tboP60WLA&s',
//     },
//   ];

//   const [products, setProducts] = useState(initialProducts);
//   const [salesCount, setSalesCount] = useState(location.state?.salesCount || {}); // Load previous sales count
//   const [dailySummary, setDailySummary] = useState(location.state?.dailySummary || {
//     totalSales: 0,
//     totalProfit: 0,
//     totalLoss: 0,
//   });

//   const handleBuyProduct = (product) => {
//     setSalesCount((prevCount) => ({
//       ...prevCount,
//       [product.id]: (prevCount[product.id] || 0) + 1,
//     }));

//     setDailySummary((prevSummary) => ({
//       totalSales: prevSummary.totalSales + product.price,
//       totalProfit: prevSummary.totalProfit + product.profit,
//       totalLoss: prevSummary.totalLoss + product.loss,
//     }));
//   };

//   const navigate = useNavigate();

//   const handleNavigateToDetails = () => {
//     navigate('/daily-details', { state: { dailySummary, salesCount } });
//   };

//   return (
//     <div className="glossary-store">
//       <h1>FOOD STORE</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <div className="card flex flex" key={product.id} style={{ width: '18rem', margin: '1rem' }}>
//             <div className="card-body">
//               <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px' }} />
//               <h5 className="card-title">{product.name}</h5>
//               <p className="card-text">Price: ${product.price}</p>
//               <p className="card-text">Profit: ${product.profit}</p>
//               <p className="card-text">Loss: ${product.loss}</p>
//               <button className="btn btn-primary" onClick={() => handleBuyProduct(product)}>
//                 Buy {product.name}
//               </button>
//               <p>Sold: {salesCount[product.id] || 0} times</p>
//               <p>Total Profit: ${(salesCount[product.id] || 0) * product.profit}</p>
//               <p>Total Loss: ${(salesCount[product.id] || 0) * product.loss}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="daily-summary">
//         <h2>Daily Summary</h2>
//         <p>Total Sales: ${dailySummary.totalSales}</p>
//         <p>Total Profit: ${dailySummary.totalProfit}</p>
//         <p>Total Loss: ${dailySummary.totalLoss}</p>

//         {/* Navigate to Daily Details page */}
//         <button className="btn btn-secondary" onClick={handleNavigateToDetails}>
//           View Daily Details
//         </button>
//       </div>
//     </div>
//   );
// }

// function DailyDetails() {
//   const location = useLocation(); // Access passed state from previous route
//   const { dailySummary, salesCount } = location.state || {
//     dailySummary: { totalSales: 0, totalProfit: 0, totalLoss: 0 },
//     salesCount: {},
//   };

//   const navigate = useNavigate();

//   const handleBackToStore = () => {
//     // Pass the state back when navigating to the store
//     navigate('/', { state: { dailySummary, salesCount } });
//   };

//   return (
//     <div className="daily-details">
//       <h1>Daily Details</h1>
//       <p>Total Sales: ${dailySummary.totalSales}</p>
//       <p>Total Profit: ${dailySummary.totalProfit}</p>
//       <p>Total Loss: ${dailySummary.totalLoss}</p>

//       {/* Button to navigate back to the main store page */}
//       <button className="btn btn-primary" onClick={handleBackToStore}>
//         Back to Store
//       </button>
//     </div>
//   );
// }