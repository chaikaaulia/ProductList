// Gambar produk dibuat sebagai SVG data-URI supaya tidak bergantung pada internet.
const makeImage = (emoji, from, to) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${from}"/>
        <stop offset="1" stop-color="${to}"/>
      </linearGradient>
    </defs>
    <rect width="300" height="220" fill="url(#g)"/>
    <circle cx="240" cy="40" r="60" fill="#ffffff" opacity="0.12"/>
    <circle cx="50" cy="190" r="50" fill="#ffffff" opacity="0.10"/>
    <text x="150" y="132" font-size="90" text-anchor="middle">${emoji}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

// Daftar kategori. "id" harus sama dengan field `category` pada produk.
export const categories = [
  { id: "minuman", label: "Minuman", icon: "🥤" },
  { id: "dessert", label: "Dessert", icon: "🍰" },
  { id: "makanan", label: "Makanan", icon: "🍔" },
];

const products = [
  { id: 1, category: "minuman", name: "Espresso", price: 18000, image: makeImage("☕", "#6f4e37", "#3b2417") },
  { id: 2, category: "minuman", name: "Cappuccino", price: 28000, image: makeImage("🥛", "#c08552", "#8c5a3c") },
  { id: 3, category: "minuman", name: "Caffe Latte", price: 30000, image: makeImage("🍵", "#a47148", "#5e3a22") },
  { id: 4, category: "minuman", name: "Es Kopi Susu", price: 25000, image: makeImage("🧊", "#7aa6c2", "#3d6b8c") },
  { id: 5, category: "minuman", name: "Matcha Latte", price: 32000, image: makeImage("🍃", "#8fb573", "#4f7a3a") },
  { id: 6, category: "makanan", name: "Croissant", price: 22000, image: makeImage("🥐", "#e2a64b", "#b86f1d") },
  { id: 7, category: "dessert", name: "Choco Cake", price: 35000, image: makeImage("🍰", "#8b5e83", "#4a2c4a") },
  { id: 8, category: "makanan", name: "Roti Bakar", price: 20000, image: makeImage("🍞", "#d9a066", "#a8662e") },
  { id: 9, category: "minuman", name: "Teh Tarik", price: 18000, image: makeImage("🫖", "#c08552", "#8c5a3c") },
  { id: 10, category: "dessert", name: "Donat", price: 15000, image: makeImage("🍩", "#d98aa8", "#a85575") },
  { id: 11, category: "minuman", name: "Americano", price: 20000, image: makeImage("☕", "#5a4636", "#2e2118") },
  { id: 12, category: "minuman", name: "Mocha", price: 32000, image: makeImage("🍫", "#7b4a35", "#40231a") },
  { id: 13, category: "minuman", name: "Es Teh Lemon", price: 15000, image: makeImage("🍋", "#e6c84a", "#b08f1a") },
  { id: 14, category: "minuman", name: "Jus Alpukat", price: 22000, image: makeImage("🥑", "#8fb04f", "#587a24") },
  { id: 15, category: "minuman", name: "Jus Jeruk", price: 20000, image: makeImage("🍊", "#f0a03c", "#c46d12") },
  { id: 16, category: "minuman", name: "Milkshake Stroberi", price: 28000, image: makeImage("🍓", "#e57a8f", "#b04560") },
  { id: 17, category: "minuman", name: "Smoothie Mangga", price: 26000, image: makeImage("🥭", "#f2b134", "#c97f10") },
  { id: 18, category: "makanan", name: "Sandwich", price: 27000, image: makeImage("🥪", "#c9a46b", "#8f6c37") },
  { id: 19, category: "makanan", name: "Kentang Goreng", price: 18000, image: makeImage("🍟", "#e8c24a", "#b8901c") },
  { id: 20, category: "dessert", name: "Cookies", price: 12000, image: makeImage("🍪", "#b98a58", "#7d5530") },
  { id: 21, category: "dessert", name: "Pancake", price: 28000, image: makeImage("🥞", "#d9a870", "#a8733a") },
  { id: 22, category: "dessert", name: "Waffle", price: 30000, image: makeImage("🧇", "#d6a24f", "#a0701c") },
  { id: 23, category: "makanan", name: "Pizza Mini", price: 35000, image: makeImage("🍕", "#e8a64f", "#b8661c") },
  { id: 24, category: "makanan", name: "Nasi Goreng", price: 30000, image: makeImage("🍚", "#d9c9a0", "#a08a58") },
  { id: 25, category: "makanan", name: "Mie Goreng", price: 28000, image: makeImage("🍜", "#e8c26a", "#b88a2a") },
  { id: 26, category: "makanan", name: "Burger", price: 38000, image: makeImage("🍔", "#d99a52", "#a0622a") },
  { id: 27, category: "makanan", name: "Hot Dog", price: 25000, image: makeImage("🌭", "#e2a35a", "#b06a2a") },
  { id: 28, category: "makanan", name: "Bakso", price: 25000, image: makeImage("🍲", "#c9a07a", "#8a5e3a") },
  { id: 29, category: "makanan", name: "Dimsum", price: 24000, image: makeImage("🥟", "#d8c3a0", "#9a8058") },
  { id: 30, category: "makanan", name: "Taco", price: 28000, image: makeImage("🌮", "#e8c060", "#b88a20") },
  { id: 31, category: "makanan", name: "Onigiri", price: 14000, image: makeImage("🍙", "#b8c4cc", "#7a8a96") },
  { id: 32, category: "dessert", name: "Es Krim Vanilla", price: 18000, image: makeImage("🍨", "#f0d9a0", "#c8a85a") },
  { id: 33, category: "dessert", name: "Pudding Cokelat", price: 15000, image: makeImage("🍮", "#b88a5a", "#7a502a") },
  { id: 34, category: "dessert", name: "Cupcake", price: 20000, image: makeImage("🧁", "#e89ab4", "#b85a7a") },
  { id: 35, category: "dessert", name: "Salad Buah", price: 22000, image: makeImage("🥗", "#9ac27a", "#5a8a3a") },
  { id: 36, category: "makanan", name: "Popcorn", price: 15000, image: makeImage("🍿", "#f0d070", "#c0a030") },
  { id: 37, category: "dessert", name: "Smoothie Bowl", price: 32000, image: makeImage("🥣", "#c89ad0", "#8a5a96") },
  { id: 38, category: "minuman", name: "Kopi Tubruk", price: 12000, image: makeImage("☕", "#6a5240", "#352618") },
  { id: 39, category: "dessert", name: "Affogato", price: 30000, image: makeImage("🍨", "#a07a5a", "#5a3a22") },
  { id: 40, category: "minuman", name: "Es Cokelat", price: 26000, image: makeImage("🥤", "#8a5a46", "#4a2a1e") },
  { id: 41, category: "minuman", name: "Teh Hijau", price: 17000, image: makeImage("🍵", "#9ac28a", "#5a8a4a") },
  { id: 42, category: "minuman", name: "Es Kelapa Muda", price: 16000, image: makeImage("🥥", "#a8d0c0", "#5a9a82") },
];

export default products;
