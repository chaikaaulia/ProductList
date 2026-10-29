export const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

// Komponen menerima data produk melalui props: name, price, image
function ProductCard({ name, price, image, isAdded, onAdd, onRemove }) {
  return (
    <article className={`card ${isAdded ? "card--added" : ""}`}>
      <div className="card__image">
        <img src={image} alt={name} />
        {isAdded && <span className="card__badge">✓ Di keranjang</span>}
      </div>

      <div className="card__body">
        <h3 className="card__name">{name}</h3>
        <p className="card__price">{formatRupiah(price)}</p>

        {/* Conditional rendering: tombol berubah setelah produk ditambahkan */}
        {isAdded ? (
          <div className="card__actions">
            <button className="btn btn--added" disabled>
              Added
            </button>
            <button className="btn btn--ghost" onClick={onRemove}>
              Hapus
            </button>
          </div>
        ) : (
          <button className="btn btn--primary" onClick={onAdd}>
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
