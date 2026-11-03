export default function Sidebar() {
  const navItems = ['Dashboard', 'Products', 'Orders', 'Settings'];

  return (
    <aside className="w-full md:w-56 bg-bg-card border-b md:border-b-0 md:border-r border-gray-200 p-4 shrink-0">
      <div className="font-bold text-lg text-primary mb-4 hidden md:block">
        InventoryApp
      </div>
      <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`px-3 py-2 text-sm rounded-btn transition text-center md:text-left ${
              index === 1
                ? 'bg-primary text-white font-medium'
                : 'text-text-muted hover:bg-gray-100 hover:text-text-main'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </aside>
  );
}
