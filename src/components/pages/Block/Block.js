import ViewBlock from "../../viewBlock/viewBlock";
import Header from "../../header/header";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Block = () => {
  //   videos = [{id: 1, src:'https://www.youtube.com/embed/tQVqagCOxLA', description: 'Описание'}]
  const { blockid } = useParams();
  const { auth,user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.id) {
      navigate("/signin");
    }
  }, []);
  return <div className="App"><Header auth={auth} />
  <ViewBlock blockId={blockid} /></div>;
};

export default Block;
