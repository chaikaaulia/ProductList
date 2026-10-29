import { formatRupiah } from "./ProductCard.jsx";

function Cart({ items, total, onRemove, onClear, onClose }) {
  return (
    <aside className="cart" aria-label="Keranjang belanja">
      <div className="cart__header">
        <h2>Keranjang ({items.length})</h2>
        <button
          className="cart__close"
          onClick={onClose}
          aria-label="Tutup keranjang"
        >
          ✕
        </button>
      </div>

      {items.length === 0 ? (
        <p className="cart__empty">
          Keranjang masih kosong. Yuk pilih menu favoritmu! ☕
        </p>
      ) : (
        <>
          <ul className="cart__list">
            {items.map((item) => (
              <li key={item.id} className="cart__item">
                <img src={item.image} alt={item.name} />
                <div className="cart__info">
                  <strong>{item.name}</strong>
                  <span>{formatRupiah(item.price)}</span>
                </div>
                <button
                  className="cart__remove"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Hapus ${item.name}`}
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>

          <div className="cart__footer">
            <div className="cart__total">
              <span>Total</span>
              <strong>{formatRupiah(total)}</strong>
            </div>
            <button className="btn btn--ghost btn--block" onClick={onClear}>
              Kosongkan keranjang
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
