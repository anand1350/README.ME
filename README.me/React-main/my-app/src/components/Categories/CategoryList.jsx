import { SlPencil, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

function TableRow({ item, index, onEdit }) {
  const [deleted, setDeleted] = useState(false);
  const deleteItem = () => {
    axios
      .delete("http://localhost:8000/categories/" + item.id)
      .then(() => {
        toast.success("Амжилттай устгалаа");
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  };

  if (deleted) return <></>;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onEdit(item)}
        >
          Edit <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          Delete <SlTrash />
        </button>
      </td>
    </tr>
  );
}
export default function CategoryList({ items, onEdit }) {
  console.log(items);
  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th width="1">#</th>
            <th>Name</th>
            <th>Description</th>
            <th width="1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => {
            return (
              <TableRow
                item={item}
                index={index + 1}
                key={`list-item-${index}`}
                onEdit={onEdit}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
