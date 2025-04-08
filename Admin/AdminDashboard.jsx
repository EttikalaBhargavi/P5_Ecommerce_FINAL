import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddProduct />
      <ProductList />
    </div>
  );
}

export default AdminDashboard;