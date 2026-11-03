import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { PRODUCTS } from './data/products';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-bg-main text-text-main">
      {/* Sidebar / Navigation that adapts to different screen sizes */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Header with title and action button */}
        <Header />

        {/* Responsive Product Grid: 1 col on small, 2 cols on medium, 3 cols on large */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
