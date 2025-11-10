import { useState } from 'react';
import { Search, Filter, Package, Truck, AlertTriangle, BarChart3, Settings, Users, Home } from 'lucide-react';
import { inventoryData } from './data/inventory';
import InventoryTable from './components/InventoryTable';
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Product } from './data/inventory';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = ['All', ...new Set(inventoryData.map(product => product.category))];
  const statuses = ['All', 'In Stock', 'Low Stock', 'Out of Stock', 'Discontinued'];

  const filteredProducts = inventoryData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || product.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <Package size={20} />, label: 'Inventory', active: true },
    { icon: <Truck size={20} />, label: 'Orders' },
    { icon: <Users size={20} />, label: 'Suppliers' },
    { icon: <AlertTriangle size={20} />, label: 'Alerts' },
    { icon: <BarChart3 size={20} />, label: 'Reports' },
    { icon: <Settings size={20} />, label: 'Settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar menuItems={menuItems} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Inventory Management</h1>
              
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-3">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <InventoryTable 
                products={filteredProducts} 
                onProductSelect={handleProductSelect} 
              />
            </div>
          </div>
        </main>
      </div>
      
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={handleCloseDetails} 
        />
      )}
    </div>
  );
}

export default App;
