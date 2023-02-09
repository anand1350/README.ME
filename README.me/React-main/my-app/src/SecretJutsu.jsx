import { useState } from "react";

export default function SecretJutsu() {
  const [books] = useState([
    {
      name: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "fiction",
      year_published: 1813,
      id: 1,
    },
  ]);
  console.log(books[0].name);
  //   MyLi((book))
  const listItems = books.map((book) => <li>{books}</li>);
  console.log(listItems);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

const myCoolButton = () => <input type="button" value="Click me!" />;
