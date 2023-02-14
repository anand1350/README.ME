import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-md-3 col-sm-6 col-12" key={index}>
              <Card
                title={category.description}
                text={category.text}
                image={category.imageUrl}
                id={category.id}
                articleId={category.id}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
