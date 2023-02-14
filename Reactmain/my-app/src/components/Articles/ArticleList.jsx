import { SlPencil, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import axios from "axios";

function TableRow({ item, index, onEdit }) {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const deleteItem = () => {
    // axios
    //   .delete("https://demo-api-one.vercel.app/api/articles", {
    //     data: { id: item.id },
    //   })
    //   .then(() => {
    //     toast.success("Amjilttai ustgalaa");
    //     setDeleted(true);
    //   })
    //   .catch((err) => {
    //     if (err.response.status === 401 || err.response.status === 403) {
    //       navigate("/signout");
    //     }
    //     toast.error(err.response.data.message);
    //   });

    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/articles", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: item.id }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.success("Амжилттай устгалаа");
          setDeleted(true);
        } else {
          if (statusCode === 403 || statusCode === 401) {
            navigate("/signout");
          }
          toast.error(data.message);
        }
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
      <td>{item.text && parse(item.text)}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => onEdit(item)}
        >
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
}
export default function ArticleList({ items, onEdit }) {
  console.log(items);
  return (
    <div>
      <table className="table table-bordered table-hover">
        <tbody>
          <tr>
            <th width="1">#</th>
            <th width="1">Name</th>
            <th width="1">Description</th>
            <th>Text</th>
          </tr>
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
