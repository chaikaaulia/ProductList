import { useState } from "react";
import products, { categories } from "./data/products.js";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  // State utama: daftar produk yang ada di keranjang
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const filtered = products.filter(
    (p) =>
      (activeCategory === "semua" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  // Kelompokkan produk per kategori supaya tiap kategori punya section sendiri
  const sections = categories
    .map((c) => ({ ...c, items: filtered.filter((p) => p.category === c.id) }))
    .filter((c) => c.items.length > 0);

  return (
    <div className="app">
      <header className="header">
        <div className="header__brand">
          <span className="header__logo">☕</span>
          <div>
            <h1>Toko Kopi</h1>
            <p>Kopi & camilan favorit setiap hari</p>
          </div>
        </div>

        <button className="cart-btn" onClick={() => setShowCart((s) => !s)}>
          🛒 Keranjang
          <span className={`cart-btn__count ${cart.length > 0 ? "is-active" : ""}`}>
            {cart.length}
          </span>
        </button>
      </header>

      <main className="main">
        <div className="toolbar">
          <h2>Daftar Produk</h2>
          <input
            type="search"
            className="search"
            placeholder="Cari produk..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <nav className="tabs" aria-label="Kategori produk">
          {[{ id: "semua", label: "Semua", icon: "✨" }, ...categories].map((c) => (
            <button
              key={c.id}
              className={`tab ${activeCategory === c.id ? "is-active" : ""}`}
              onClick={() => setActiveCategory(c.id)}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </nav>

        <p className="summary">
          {cart.length} dari {products.length} produk ada di keranjang
        </p>

        {filtered.length === 0 ? (
          <p className="empty">Produk tidak ditemukan.</p>
        ) : (
          sections.map((section) => (
            <section key={section.id} className="category">
              <h3 className="category__title">
                {section.icon} {section.label}
                <span className="category__count">{section.items.length}</span>
              </h3>
              <div className="grid">
                {section.items.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    isAdded={isInCart(product.id)}
                    onAdd={() => addToCart(product)}
                    onRemove={() => removeFromCart(product.id)}
                  />
                ))}
              </div>
            </section>
          ))
        )}
      </main>

      {showCart && (
        <>
          <div className="overlay" onClick={() => setShowCart(false)} />
          <Cart
            items={cart}
            total={total}
            onRemove={removeFromCart}
            onClear={clearCart}
            onClose={() => setShowCart(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
