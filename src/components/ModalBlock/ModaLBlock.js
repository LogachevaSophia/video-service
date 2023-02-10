import RoboService from "../../service/roboService";
import "./ModalBock.css";

// import RoboService from "../../service/roboService";

function ModalBlock(props) {
  const { id, active, setModaActive, idBlock, images } = props;
  // const images = [
  //   {
  //     id: 1,
  //     link: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     description: "descaejrbgfvabf a;ekrjgnkaenr a;jekrg  aek;rjbgk.ajeg",
  //   },
  //   {
  //     id: 2,
  //     link: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     description: "descaejrbgfvabf a;ekrjgnkaenr a;jekrg  aek;rjbgk.ajeg",
  //   },
  //   {
  //     id: 3,
  //     link: "https://ucarecdn.com/83e1d423-ddf3-433c-9c71-3a1e6f255984/noroot.jpg",
  //     description: "descaedfdb ebrbgfvabf a;ekrjgnkaenr a;jekrg  aek;rjbgk.ajeg",
  //   },
    
  // ];

  


  const elements = images.map((elem) => {
    return (
      <div className="conteiner">
        <div className="conteinerItem">{elem.id}</div>
        <div className="conteinerItem">
          <img src={elem.link} />
        </div>
        <div className="conteinerItem">{elem.description}</div>
        <div className="conteinerItem">
          <button
            className="buy"
            onClick={() => {
              console.log(elem.id);
            }}
          >
            <a href={elem.buyLink}>Купить</a>
          </button>
        </div>
      </div>
    );
  });
  if (active) {
    return (
      <div className="modalBlock" >
        <div className="modalFormContent">
        <button className="close" onClick={() => setModaActive(false)}> ✖ </button>
          <div className='content'>
           
            <p></p>
            {elements}
          </div>
          <p>BLOCK # {idBlock}</p>
        </div>
      </div>
    );
  } else {
    return;
  }
}

export default ModalBlock;
