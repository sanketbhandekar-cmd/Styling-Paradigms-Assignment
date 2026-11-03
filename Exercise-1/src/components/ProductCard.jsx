import Button from './Button';

export default function ProductCard({ product }) {
  const isOutOfStock = product.status === 'Out of Stock';

  return (
    <div className="bg-bg-card rounded-card p-card shadow-sm hover:shadow-md transition flex flex-col justify-between border border-gray-200">
      <div>
        {/* Product image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover rounded-md mb-4 bg-gray-100"
        />

        {/* Category */}
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
          {product.category}
        </span>

        {/* Product name */}
        <h2 className="text-base font-bold text-text-main mt-1">
          {product.name}
        </h2>

        {/* Product status */}
        <div className="mt-2">
          <span
            className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
              isOutOfStock
                ? 'bg-red-100 text-red-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {product.status}
          </span>
        </div>
      </div>

      {/* Price & Action button */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-lg font-bold text-text-main">
          ${product.price.toFixed(2)}
        </span>
        <Button
          disabled={isOutOfStock}
          onClick={() => alert(`Added ${product.name} to cart!`)}
        >
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}
