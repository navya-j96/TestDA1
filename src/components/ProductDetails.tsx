import { X, AlertTriangle, Package, Truck, Calendar, DollarSign, Tag, MapPin } from 'lucide-react';
import { Product } from '../data/inventory';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

const ProductDetails = ({ product, onClose }: ProductDetailsProps) => {
  const isLowStock = product.totalQuantity <= product.reorderThreshold && product.totalQuantity > 0;
  const isOutOfStock = product.totalQuantity === 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/3">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-500 mr-3">SKU: {product.sku}</span>
                {isLowStock && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertTriangle size={12} className="mr-1" />
                    Low Stock
                  </span>
                )}
                {isOutOfStock && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <AlertTriangle size={12} className="mr-1" />
                    Out of Stock
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Current Price</p>
                  <p className="text-lg font-bold text-gray-900">${product.currentPrice.toFixed(2)}</p>
                  {product.basePrice !== product.currentPrice && (
                    <p className="text-sm text-gray-500 line-through">${product.basePrice.toFixed(2)}</p>
                  )}
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Available Quantity</p>
                  <p className="text-lg font-bold text-gray-900">{product.totalQuantity}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="text-gray-900">{product.category} / {product.subCategory}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Reorder Threshold</p>
                  <p className="text-gray-900">{product.reorderThreshold} units</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Product Variants</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    {product.variants.some(v => v.size) && (
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                    )}
                    {product.variants.some(v => v.color) && (
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Color
                      </th>
                    )}
                    {product.variants.some(v => v.material) && (
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Material
                      </th>
                    )}
                    {product.variants.some(v => v.weight) && (
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weight
                      </th>
                    )}
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.variants.map((variant) => (
                    <tr key={variant.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                        {variant.sku}
                      </td>
                      {product.variants.some(v => v.size) && (
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {variant.size || '-'}
                        </td>
                      )}
                      {product.variants.some(v => v.color) && (
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {variant.color || '-'}
                        </td>
                      )}
                      {product.variants.some(v => v.material) && (
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {variant.material || '-'}
                        </td>
                      )}
                      {product.variants.some(v => v.weight) && (
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                          {variant.weight || '-'}
                        </td>
                      )}
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                        {variant.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Supplier Information</h2>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start mb-4">
                <Truck className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium text-gray-900">{product.supplier.name}</h3>
                  <p className="text-sm text-gray-500">
                    Contact: {product.supplier.contactPerson}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">Email</p>
                    <p className="text-gray-900">{product.supplier.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">Phone</p>
                    <p className="text-gray-900">{product.supplier.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">Lead Time</p>
                    <p className="text-gray-900">{product.supplier.leadTime} days</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-500">Minimum Order</p>
                    <p className="text-gray-900">{product.supplier.minimumOrderQuantity} units</p>
                  </div>
                </div>
              </div>
              
              {product.supplier.preferredSupplier && (
                <div className="mt-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Preferred Supplier
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Calendar className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Last Restocked</p>
                  <p className="text-gray-900">{new Date(product.lastRestocked).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Package className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Reorder Quantity</p>
                  <p className="text-gray-900">{product.reorderQuantity} units</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <DollarSign className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Cost Price</p>
                  <p className="text-gray-900">${product.costPrice.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Tag className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Profit Margin</p>
                  <p className="text-gray-900">{product.profitMargin.toFixed(2)}%</p>
                </div>
              </div>
              
              <div className="flex items-start col-span-2">
                <MapPin className="text-gray-400 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Storage Location</p>
                  <p className="text-gray-900">{product.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
