import Button from "react-bootstrap/Button";

import { SlPlus } from "react-icons/sl";

export default function Heading({ title, handleShow }) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <Button size="sm" onClick={handleShow} variant="primary">
            Create <SlPlus />
          </Button>
        </div>
      </div>
    </>
  );
}
