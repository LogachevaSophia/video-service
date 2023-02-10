import "./BlockItem.css";
import RoboService from "../../service/roboService";
import { useNavigate } from "react-router-dom";

function BlockItem(props) {
  const {
    id,
    link,
    setModaActive,
    idBlock,
    description,
    setImages,
    // onSelectedBlock,
  } = props;

  const roboService = new RoboService();


  // const getPayment = async (id) => {
  //   const res = await roboService.getModalUrl(id);
  //   console.log(res.img);
  //   // setImages(res.img);
  // };
  const navigate = useNavigate();

  return (
    <div
      className="blockItem"
      key={id}
      id={id}
      onClick={() => {
        navigate(`/block/${id}`)
        idBlock(id);
        // setModaActive(true);
        // onSelectedBlock(id);
        // getPayment(id);
      }}
    >
       <img key={id} src={link}></img>
      <div className="blockItemFooter">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlockItem;
