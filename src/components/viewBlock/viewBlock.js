import RoboService from "../../service/roboService";
import "./viewBlock.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner/Spinner";

const ViewBlock = ({ blockId }) => {
  const [videos, setVideos] = useState([]);
  const [dataSlider, setDataSlider] = useState([]);
  const [href, setHref] = useState("");
  const { user } = useSelector((state) => state.auth);


  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const roboService = new RoboService();

  const getPayment = async () => {
    const res = await roboService.getVideosInBlock(blockId, user.id).then(setLoading(false)).catch(()=> {setLoading(false); setError(true)});
    console.log(res);
    setVideos(res.videos);
    
  };
  const getnobuy = async () => {
    const res = await roboService.getnobuy(blockId, user.id).then(setLoading(false)).catch(()=> {setLoading(false); setError(true)});
    console.log(res);
    setDataSlider(res);
  };
  const loadedpaymentBlock = (res) =>{
    setLoading(false)
    console.log(res);
    setHref(res.link);
    
     

  }

  const getPaymentBlock = async () => {
    const res = await roboService.getPaymentBlock(blockId, user.id).then(loadedpaymentBlock).catch(()=> {setLoading(false); setError(true)});
    
  };

  useEffect(() => {
    getPayment();
    getnobuy();
  }, []);
  useEffect(()=>{
    if (href.length!=0){window.location=href;}

  },[href])

 
  const navigate = useNavigate();
  const item = videos.map((item) => {
    return (
      <p key={item.id}>
        <iframe
          //   width="50%"
          // height="250px"
          src={item.src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </p>
    );
  });
  const itemAll = 
      <>
        <div className="conteinerBlock">
          {videos.length === 0 ? <h1>Вы ничего не купили((</h1> : item}
        </div>
        <Slider data={dataSlider} />
        {dataSlider.length != 0 ? (
          <button className="swiper-button" onClick={getPaymentBlock}>
            Купить весь блок
          </button>
        ) : null}
      </>

  //   videos = [{id: 1, src:'https://www.youtube.com/embed/tQVqagCOxLA', description: 'Описание'}]
  const errorMessage = error? <ErrorMessage/>: null;
  const spinner = loading? <Spinner/>: null;
  const visibale = !(error||loading)? itemAll: null;
  return (
    <>
      <div className="viewBlock">
        <div className="headerBlock">
          <button className="swiper-button" onClick={() => navigate(-1)}>
            Назад
          </button>
        </div>
        <p></p>
        {errorMessage}
        {spinner}
        {visibale}
      </div>
    </>
  );
};

export default ViewBlock;
