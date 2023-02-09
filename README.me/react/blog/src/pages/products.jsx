import { useEffect, useState } from "react";
import dayjs

export default function products() {
  const [page,setPage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/products').then
  })

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <main>
      <div className="container">
        <div className='row'>
          {page.items.map((product) => {
            return (
              <div>
                <div>
                  <div>
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
}
