import { useState, useEffect } from "react";
import Heading from "../components/Heading";
import { toast } from "react-toastify";
import ArticleCreate from "../components/Articles/ArticleCreate";
import ArticleEdit from "../components/Articles/ArticleEdit";
import ArticleList from "../components/Articles/ArticleList";
import DynamicModal from "../components/utils/DynamicModal";

export default function Articles() {
  const [modalShow, setModalShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Aldaa garlaa");
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (article) => {
    modalClose();
    setArticles([...articles, article]);
  };

  const showCreateModal = () => {
    setModalContent(<ArticleCreate afterSubmit={afterSubmit} />);
    setModalShow(true);
  };

  const afterEdit = (article) => {
    modalContent();
    let newArticles = articles.map((cat) => {
      if (cat.id === article.id) {
        return article;
      }
      return cat;
    });
    setArticles(newArticles);
  };

  const showEditModal = (article) => {
    setModalContent(<ArticleEdit articles={article} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Articles" handleShow={showCreateModal} />
        <ArticleList items={articles} onEdit={showEditModal} />
      </div>
      <DynamicModal
        show={modalShow}
        handleClose={modalClose}
        title="Create category"
        content={modalContent}
      />
    </>
  );
}
