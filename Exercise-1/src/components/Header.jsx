import Button from './Button';

export default function Header() {
  return (
    <header className="bg-bg-card border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-text-main">Product Dashboard</h1>
      <Button onClick={() => alert('Action button clicked!')}>
        Add Product
      </Button>
    </header>
  );
}
