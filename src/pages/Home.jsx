import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "helikopter",
    description: "helikopter untuk berenang",
  },
  {
    id: 2,
    name: "sendal sualow",
    description: "sendal sualow untuk berenang",
  },
  {
    id: 3,
    name: "tikus",
    description: "tikus untuk di makan",
  },
];

function Home() {
  return (
    <div>
      <h2>Home</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>

          <Link to={`/detail/${product.id}`}>
            kuranggggg bisaa Lihat Detail
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;