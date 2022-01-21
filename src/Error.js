import { Link } from "react-router-dom";

function Error() {
    return (
      <div className="content">
        <main>
          <h2>error 404</h2>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>
    );
}

export default Error;