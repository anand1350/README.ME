import { useState, useEffect } from "react";
import CategoryList from "../components/Categories/CategoryList";
import Heading from "../components/Heading";
import { toast } from "react-toastify";
import DynamicModal from "../components/utils/DynamicModal";
import CategoryEdit from "../components/Categories/CategoryEdit";
import axios from "axios";
import { useParams } from "react-router-dom";
import MenuCreate from "../components/Menu/MenuCreate";

export default function Menus() {
  const [position, setPosition] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [menus, setMenus] = useState([]);
  const [modalContent, setModalContent] = useState(<></>);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/menu-positions/" + id).then((res) => {
      setPosition(res.data);
    });
    axios
      .get("http://localhost:8000/menus?positionId=" + id)
      .then((res) => {
        setMenus(res.data);
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
  const afterSubmit = (menu) => {
    modalClose();
    setMenus([...menus, menu]);
  };

  const showCreateModal = () => {
    setModalContent(<MenuCreate afterSubmit={afterSubmit} positionId={id} />);
    setModalShow(true);
  };

  const afterEdit = (category) => {
    modalContent();
    let newMenus = menus.map((cat) => {
      if (cat.id === category.id) {
        return category;
      }
      return cat;
    });
    setMenus(newMenus);
  };

  const showEditModal = (menu) => {
    setModalContent(<CategoryEdit category={menu} afterEdit={afterEdit} />);
    setModalShow(true);
  };

  return (
    <>
      <div className="container-sm body-container">
        <Heading
          title={`"${position?.name}" - Menus`}
          handleShow={showCreateModal}
        />
        <CategoryList items={menus} onEdit={showEditModal} />
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
