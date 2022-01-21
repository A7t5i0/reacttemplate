import { Link } from "react-router-dom";

function Product() {
    return (
      <div className="content">
        <main>
          <p>
            List product details here
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    );
}

export default Product;