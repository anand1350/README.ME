import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ArticleEdit({ afterEdit, article }) {
  const [name, setName] = useState(article?.name);
  const [description, setDescription] = useState(article?.description);
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const submit = () => {
    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/articles", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ id: article?.id, name, description }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.success("Амжилттай нэмэгдлээ");
          afterEdit(data.body);
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
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the post..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <ReactQuill theme="snow" value={text} onChange={setText} />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
