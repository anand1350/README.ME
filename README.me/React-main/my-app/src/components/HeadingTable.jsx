import { SlPencil, SlTrash } from "react-icons/sl";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

function TableRow({ item, index }) {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary">
          Edit <SlPencil />
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => test(index)}
        >
          Delete <SlTrash />
        </button>
      </td>
    </tr>
  );
}
export default function HeadingTable(items, onEdit) {
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
          {items.map((item, index) => {
            return <TableRow item={item} index={index + 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
