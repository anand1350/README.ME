import { useEffect } from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/headers").then((res) => {
      setCategories(res.data);
    });
    // fetch("https://demo-api-one.vercel.app/api/categories")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCategories(data.body);
    //   });
  }, []);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <a className="brand" href="/">
                My Blog
              </a>
            </div>
            <div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Нүүр</Link>
              </li>
              <li>
                <Link to={"/products"}>Бараа</Link>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a id={cat.id} href={`/categories/${cat.id}`}>
                    {cat.name}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/ChatScreen">Chat</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
