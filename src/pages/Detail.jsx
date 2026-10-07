import { Link, useParams } from "react-router";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "Laptop untuk belajar dan bekerja",
    price: "Rp8.000.000",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Smartphone untuk komunikasi",
    price: "Rp4.000.000",
  },
  {
    id: 3,
    name: "Headphone",
    description: "Headphone untuk mendengarkan musik",
    price: "Rp1.000.000",
  },
];

function Detail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div>
        <h2>Produk Tidak di juall hahaha</h2>
        <Link to="/">Get out of here and go ke Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>kurang nihhhh! Detail Produk</h2>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Harga: {product.price}</p>

      <Link to="/">Get out of here and go ke Home</Link>
    </div>
  );
}

export default Detail;